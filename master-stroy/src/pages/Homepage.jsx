import { useState, useCallback } from 'react'
import HeroSection from '../features/home/HeroSection'
import CatalogSection from '../features/home/CatalogSection'
import AboutSection from '../features/home/AboutSection'
import TopProducts from '../features/home/TopProducts'
import ProductionSection from '../features/home/ProductionSection'
import WorksSection from '../features/home/WorksSection'
import AdvantagesSection from '../features/home/AdvantagesSection'
import OrderModal from '../features/home/OrderModal'

export default function HomePage() {
  const [orderProduct, setOrderProduct] = useState(null)
  const openOrder = useCallback((name) => setOrderProduct(name), [])
  const closeOrder = useCallback(() => setOrderProduct(null), [])

  return (
    <>
      <HeroSection />
      <CatalogSection onOrder={openOrder} />
      <AboutSection onOrder={openOrder} />
      <TopProducts onOrder={openOrder} />
      <ProductionSection />
      <WorksSection />
      <AdvantagesSection />

      {orderProduct && <OrderModal product={orderProduct} onClose={closeOrder} />}
    </>
  )
}