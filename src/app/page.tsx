import Image from 'next/image'

import { ButtonLink } from '@/components/ButtonLink'
import { HeroSection } from '@/sections/HeroSection'
import { StepsSection } from '@/sections/StepsSection'
import { IngredientsSection } from '@/sections/IngredientsSection'
import { StatSection } from '@/sections/StatSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IngredientsSection />
      <StatSection />
      <StepsSection />
    </main>
  )
}
