import { type ClassValue, clsx } from 'clsx'

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * Format price with currency symbol
 */
export function formatPrice(amount: number, currency: string = 'TRY'): string {
  const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  })
  
  return formatter.format(amount)
}

/**
 * Generate slug from string
 */
export function slugify(text: string): string {
  const trMap: Record<string, string> = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'i', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U',
  }
  
  return text
    .split('')
    .map(char => trMap[char] || char)
    .join('')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Format date to locale string
 */
export function formatDate(date: Date | string, locale: string = 'tr-TR'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Generate unique order number
 */
export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `SP-${timestamp}-${random}`
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate Turkish phone number
 */
export function isValidPhone(phone: string): boolean {
  // Turkish mobile: +90 5XX XXX XX XX or 05XX XXX XX XX
  const phoneRegex = /^(\+90|0)?5\d{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Format phone number
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.startsWith('90')) {
    return `+${cleaned}`
  } else if (cleaned.startsWith('0')) {
    return `+90 ${cleaned.slice(1)}`
  } else if (cleaned.startsWith('5')) {
    return `+90 ${cleaned}`
  }
  
  return phone
}

/**
 * Calculate cart total
 */
export function calculateCartTotal(
  items: Array<{ price: number; quantity: number }>
): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

/**
 * Check if edition is available
 */
export function isEditionAvailable(
  totalEditions: number,
  soldEditions: number
): boolean {
  return soldEditions < totalEditions
}

/**
 * Get remaining editions
 */
export function getRemainingEditions(
  totalEditions: number,
  soldEditions: number
): number {
  return Math.max(0, totalEditions - soldEditions)
}

/**
 * Generate edition label
 */
export function getEditionLabel(
  editionNumber: number,
  totalEditions: number,
  lang: 'tr' | 'en' = 'tr'
): string {
  if (lang === 'en') {
    return `${editionNumber}/${totalEditions}`
  }
  return `${editionNumber}/${totalEditions}`
}

/**
 * Safe JSON parse
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json)
  } catch {
    return fallback
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Get image blur data URL (for Next.js Image placeholder)
 */
export function getImageBlurDataURL(): string {
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=='
}
