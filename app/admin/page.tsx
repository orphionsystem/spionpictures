import { Metadata } from 'next'
import Link from 'next/link'
import { ImagePlus, Package, ShoppingCart, Settings, FileText, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yönetim Paneli | Spion Pictures',
  description: 'Spion Pictures yönetim paneli. Sanat eserlerini yönetin.',
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-darksection text-purewhite border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-display text-xl font-bold">Spion Admin</h1>
            <Link 
              href="/"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              ← Siteye Dön
            </Link>
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">Yönetim Paneli</h2>
          <p className="text-secondarytext">
            Sanat eserlerini, koleksiyonları ve siparişleri yönetin.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-secondarytext text-sm">Toplam Eser</span>
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-display font-bold">0</div>
          </div>

          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-secondarytext text-sm">Koleksiyonlar</span>
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-display font-bold">0</div>
          </div>

          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-secondarytext text-sm">Siparişler</span>
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-display font-bold">0</div>
          </div>

          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-secondarytext text-sm">Projeler</span>
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-display font-bold">0</div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upload Artwork */}
          <Link
            href="/admin/artworks/upload"
            className="group bg-purewhite p-8 rounded-sm border border-border hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <ImagePlus className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Eser Yükle
            </h3>
            <p className="text-secondarytext text-sm">
              Yeni sanat eseri ekleyin ve detaylarını girin.
            </p>
          </Link>

          {/* Manage Artworks */}
          <Link
            href="/admin/artworks"
            className="group bg-purewhite p-8 rounded-sm border border-border hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Eserleri Yönet
            </h3>
            <p className="text-secondarytext text-sm">
              Mevcut sanat eserlerini görüntüleyin ve düzenleyin.
            </p>
          </Link>

          {/* Collections */}
          <Link
            href="/admin/collections"
            className="group bg-purewhite p-8 rounded-sm border border-border hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Koleksiyonlar
            </h3>
            <p className="text-secondarytext text-sm">
              Sanat koleksiyonlarını oluşturun ve düzenleyin.
            </p>
          </Link>

          {/* Orders */}
          <Link
            href="/admin/orders"
            className="group bg-purewhite p-8 rounded-sm border border-border hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Siparişler
            </h3>
            <p className="text-secondarytext text-sm">
              Gelen siparişleri görüntüleyin ve yönetin.
            </p>
          </Link>

          {/* Projects */}
          <Link
            href="/admin/projects"
            className="group bg-purewhite p-8 rounded-sm border border-border hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Projeler
            </h3>
            <p className="text-secondarytext text-sm">
              Portföy projelerini ekleyin ve yönetin.
            </p>
          </Link>

          {/* Settings */}
          <Link
            href="/admin/settings"
            className="group bg-purewhite p-8 rounded-sm border border-border hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Ayarlar
            </h3>
            <p className="text-secondarytext text-sm">
              Site ayarlarını ve yapılandırmayı yönetin.
            </p>
          </Link>
        </div>

        {/* Quick Guide */}
        <div className="mt-12 bg-darksection text-purewhite p-8 rounded-sm">
          <h3 className="font-display text-2xl font-bold mb-4">Hızlı Başlangıç</h3>
          <ol className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="font-bold">1.</span>
              <span>İlk koleksiyonunuzu oluşturun</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">2.</span>
              <span>Sanat eserlerinizi yükleyin (görseller + detaylar)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">3.</span>
              <span>Fiyatları ve edisyon sayılarını belirleyin</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">4.</span>
              <span>Yayınlayın ve sitede görünmesini sağlayın</span>
            </li>
          </ol>
        </div>
      </main>
    </div>
  )
}
