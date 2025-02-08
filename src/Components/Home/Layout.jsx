import React from 'react'
import {HeroSection} from './HeroSection/HeroSection'
import {OverviewSection} from './OverviewSection/OverviewSection'
import {ServicesSection} from './ServicesSection/ServicesSection'
import {ProductsSection} from './ProductSection/ProductsSection'

function Layout() {
  return (
    <div>
          <HeroSection></HeroSection>
          <OverviewSection></OverviewSection>
          <ServicesSection></ServicesSection>
          <ProductsSection></ProductsSection>
    </div>
  )
}

export default Layout