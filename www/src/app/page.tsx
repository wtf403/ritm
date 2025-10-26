import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import WhatMakesDifferent from '@/components/WhatMakesDifferent'
import TryRiskFree from '@/components/TryRiskFree'
import KeyFeatures from '@/components/KeyFeatures'
import WatchInAction from '@/components/WatchInAction'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhatMakesDifferent />
        <TryRiskFree />
        <KeyFeatures />
        <WatchInAction />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
