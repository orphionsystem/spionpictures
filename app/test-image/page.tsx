import Image from 'next/image'

export default function TestImagePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Görsel Test Sayfası</h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-2">1. Normal img tag:</h2>
        <img 
          src="/artworks/adsiz-toren.png" 
          alt="Test 1"
          className="w-64 h-auto border-2 border-red-500"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">2. Next.js Image (unoptimized):</h2>
        <div className="relative w-64 h-80 border-2 border-blue-500">
          <Image
            src="/artworks/adsiz-toren.png"
            alt="Test 2"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">3. Next.js Image (optimized):</h2>
        <div className="relative w-64 h-80 border-2 border-green-500">
          <Image
            src="/artworks/adsiz-toren.png"
            alt="Test 3"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">4. Direct link:</h2>
        <a href="/artworks/adsiz-toren.png" target="_blank" className="text-blue-500 underline">
          /artworks/adsiz-toren.png - Tıkla ve yeni sekmede aç
        </a>
      </div>
    </div>
  )
}
