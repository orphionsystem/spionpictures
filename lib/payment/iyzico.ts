/**
 * iyzico Payment Gateway Integration
 * 
 * This file contains the implementation for iyzico Checkout Form integration.
 * 
 * SECURITY NOTES:
 * - Never expose API keys or secret keys to the client
 * - All payment operations must run server-side only
 * - Validate webhook signatures to prevent fraud
 * - Implement idempotent order processing
 * 
 * SETUP REQUIRED:
 * 1. Create iyzico account (sandbox for testing, production for live)
 * 2. Get API Key and Secret Key
 * 3. Add to .env.local:
 *    IYZICO_API_KEY=your_api_key
 *    IYZICO_SECRET_KEY=your_secret_key
 *    IYZICO_BASE_URL=https://sandbox-api.iyzipay.com (or production URL)
 * 
 * TESTING:
 * Use iyzico test cards:
 * - Success: 5528790000000008
 * - 3D Secure: 5528790000000008 (password: wallet)
 * 
 * DOCUMENTATION:
 * https://dev.iyzipay.com/
 */

import crypto from 'crypto'

interface IyzicoConfig {
  apiKey: string
  secretKey: string
  baseUrl: string
}

interface CheckoutFormRequest {
  locale?: 'tr' | 'en'
  conversationId: string
  price: string
  paidPrice: string
  currency: string
  basketId: string
  paymentGroup: string
  callbackUrl: string
  enabledInstallments?: number[]
  buyer: {
    id: string
    name: string
    surname: string
    gsmNumber: string
    email: string
    identityNumber: string
    registrationAddress: string
    ip: string
    city: string
    country: string
  }
  shippingAddress: {
    contactName: string
    city: string
    country: string
    address: string
  }
  billingAddress: {
    contactName: string
    city: string
    country: string
    address: string
  }
  basketItems: Array<{
    id: string
    name: string
    category1: string
    itemType: string
    price: string
  }>
}

interface CheckoutFormResponse {
  status: string
  locale: string
  systemTime: number
  conversationId: string
  token?: string
  checkoutFormContent?: string
  tokenExpireTime?: number
  paymentPageUrl?: string
  errorCode?: string
  errorMessage?: string
  errorGroup?: string
}

/**
 * Get iyzico configuration from environment variables
 */
function getIyzicoConfig(): IyzicoConfig {
  const apiKey = process.env.IYZICO_API_KEY
  const secretKey = process.env.IYZICO_SECRET_KEY
  const baseUrl = process.env.IYZICO_BASE_URL || 'https://sandbox-api.iyzipay.com'

  if (!apiKey || !secretKey) {
    throw new Error(
      'iyzico configuration is missing. Please set IYZICO_API_KEY and IYZICO_SECRET_KEY environment variables.'
    )
  }

  return { apiKey, secretKey, baseUrl }
}

/**
 * Generate authorization header for iyzico API
 */
function generateAuthorizationHeader(
  config: IyzicoConfig,
  randomString: string,
  requestBody: string
): string {
  const dataToEncrypt = randomString + requestBody
  const hash = crypto
    .createHmac('sha256', config.secretKey)
    .update(dataToEncrypt)
    .digest('base64')

  return `IYZWS ${config.apiKey}:${hash}`
}

/**
 * Generate random string for request
 */
function generateRandomString(): string {
  return crypto.randomBytes(16).toString('hex')
}

/**
 * Initialize checkout form and get payment token
 */
export async function initializeCheckoutForm(
  request: CheckoutFormRequest
): Promise<CheckoutFormResponse> {
  const config = getIyzicoConfig()
  const randomString = generateRandomString()
  const requestBody = JSON.stringify(request)

  const authorization = generateAuthorizationHeader(config, randomString, requestBody)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': authorization,
    'x-iyzi-rnd': randomString,
  }

  try {
    const response = await fetch(`${config.baseUrl}/payment/iyzipos/checkoutform/initialize/auth/ecom`, {
      method: 'POST',
      headers,
      body: requestBody,
    })

    const data: CheckoutFormResponse = await response.json()

    if (data.status !== 'success') {
      throw new Error(data.errorMessage || 'iyzico payment initialization failed')
    }

    return data
  } catch (error) {
    console.error('iyzico initialization error:', error)
    throw error
  }
}

/**
 * Retrieve checkout form result after payment
 */
export async function retrieveCheckoutFormResult(token: string): Promise<any> {
  const config = getIyzicoConfig()
  const randomString = generateRandomString()
  const requestBody = JSON.stringify({ token })

  const authorization = generateAuthorizationHeader(config, randomString, requestBody)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': authorization,
    'x-iyzi-rnd': randomString,
  }

  try {
    const response = await fetch(`${config.baseUrl}/payment/iyzipos/checkoutform/auth/ecom/detail`, {
      method: 'POST',
      headers,
      body: requestBody,
    })

    const data = await response.json()

    if (data.status !== 'success') {
      throw new Error(data.errorMessage || 'Payment verification failed')
    }

    return data
  } catch (error) {
    console.error('iyzico result retrieval error:', error)
    throw error
  }
}

/**
 * Validate callback token (webhook verification)
 * This should be called when iyzico sends a callback to your server
 */
export async function validateCallbackToken(token: string): Promise<boolean> {
  try {
    const result = await retrieveCheckoutFormResult(token)
    return result.status === 'success' && result.paymentStatus === 'SUCCESS'
  } catch (error) {
    console.error('Token validation error:', error)
    return false
  }
}

/**
 * Helper: Format price for iyzico (must be string with 2 decimals)
 */
export function formatPriceForIyzico(amount: number): string {
  return amount.toFixed(2)
}

/**
 * Helper: Calculate installment options
 */
export function getInstallmentOptions(amount: number): number[] {
  // Example: Allow installments for orders over 500 TRY
  if (amount >= 500) {
    return [2, 3, 6, 9, 12]
  }
  return [1]
}

/**
 * Example usage in API route:
 * 
 * // app/api/payment/initialize/route.ts
 * export async function POST(request: Request) {
 *   const { orderId, amount, customerInfo, items } = await request.json()
 *   
 *   const checkoutRequest = {
 *     locale: 'tr',
 *     conversationId: orderId,
 *     price: formatPriceForIyzico(amount),
 *     paidPrice: formatPriceForIyzico(amount),
 *     currency: 'TRY',
 *     basketId: orderId,
 *     paymentGroup: 'PRODUCT',
 *     callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/callback`,
 *     buyer: { ... },
 *     shippingAddress: { ... },
 *     billingAddress: { ... },
 *     basketItems: items.map(item => ({ ... }))
 *   }
 *   
 *   const result = await initializeCheckoutForm(checkoutRequest)
 *   return Response.json({ token: result.token, paymentPageUrl: result.paymentPageUrl })
 * }
 */
