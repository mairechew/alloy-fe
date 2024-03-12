import Image from 'next/image'
import { howItWorksLineItems } from '../../public/copy/copy'
import mobileIcon from '../../public/icons/mobile-icon.svg'
import prescriptionIcon from '../../public/icons/prescription-icon.svg'
import truckIcon from '../../public/icons/truck-icon.svg'
import alloyBottle from '../../public/images/alloy_bottle.png'
import earlyAccessBadge from '../../public/images/early_access_badge.png'
import rxIcon from '../../public/images/rx_icon.png'

import { ButtonLink } from '@/components/ButtonLink'
import { InfoLineItem } from '../components/InfoLineItem'

const HeroSection = () => {
  return (
    <div className="bg-primary p-10">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 text-[color:var(--white)] gap-20 text-2xl md:mr-20 md:ml-20">
        <Image
          className="object-contain md:order-1"
          src={rxIcon}
          sizes="100vw"
          style={{
            maxHeight: '75px',
          }}
          alt="rx-icon"
        />
        <Image
          className="object-contain md:order-2"
          src={alloyBottle}
          alt="alloy-bottle"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '900px',
          }}
        />
        <Image
          className="object-contain md:order-4"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '175px',
          }}
          src={earlyAccessBadge}
          alt="early-access-badge"
        />
        <div className="flex flex-col gap-6 md:order-3">
          <div className="uppercase bg-highlight max-w-min [height:30px] p-1 px-3 text-base text-[color:var(--primary)] font-semibold">
            New!
          </div>
          <div className="flex gap-5">
            <span className="font-sb-empire text-8xl">M3</span>
            <span
              className="font-sans text-2xl [max-width:200px
            ]"
            >
              Miracle Menopause Moisturizer
            </span>
          </div>
          <div className="flex flex-col [width:500px] gap-5">
            <p className="font-sb-kingdom">
              A restorative & custom-blended estriol face cream to address signs
              of aging.
            </p>
            <p className="font-sans text-2xl">
              <span className="font-sb-kingdom">$149.97 </span>for a 3-month
              supply (1.52 oz /45ml)
            </p>
            <p className="font-sb-empire text-[color:var(--secondary)] text-2xl">
              How it works
            </p>
            {howItWorksLineItems.map((item: string) => {
              return <InfoLineItem key={`${item}-key`} description={item} />
            })}
            <div>
              <ButtonLink href="#" name="Get it now" />
            </div>
          </div>
        </div>
      </div>
      <DetailsSection />
    </div>
  )
}

const IconWithDetail = ({
  description,
  icon,
}: {
  description: string
  icon: 'truck' | 'prescription' | 'mobile'
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 items-start grid-cols-[20px_1fr]">
      {icon === 'truck' && <Image src={truckIcon} alt="truck-icon" />}
      {icon === 'mobile' && <Image src={mobileIcon} alt="mobile-icon" />}
      {icon === 'prescription' && (
        <Image src={prescriptionIcon} alt="prescription-icon" />
      )}
      <span className="font-sans text-base text-[color:var(--white)]">
        {description}
      </span>
    </div>
  )
}

const DetailsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10 mt-20 mr-20">
      <IconWithDetail description="Prescription included" icon="prescription" />
      <IconWithDetail
        description="Free shipping, cancel anytime"
        icon="truck"
      />
      <IconWithDetail
        description="Unlimited messaging with a menopause-trained doctor"
        icon="mobile"
      />
    </div>
  )
}

export { HeroSection }
