import { Section } from '@/layout/Section'
import Image from 'next/image'

import womanMoisturizing from '../../public/images/woman_moisturizing.png'
import { ButtonLink } from '@/components/ButtonLink'

const StatSection = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row relative">
        <Image
          className="md:order-2 w-full object-cover md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/8 md:mt-20 w-full"
          src={womanMoisturizing}
          alt="alloy-woman-moisturizing"
          sizes="100vw"
          style={{
            height: '454px',
            width: 'auto',
          }}
        />
        <div className="md:order-1 bg-primary text-[color:var(--white)] p-16 md:w-3/5">
          <p className="flex flex-col items-center gap-2 justify-items-center text-center m-4">
            <span className="uppercase font-sans font-normal text-2xl ">
              Did you know
            </span>
            <span className="font-sb-empire font-black italic text-6xl">
              Up to 30%
            </span>
            <span className="font-sb-kingdom font-light text-4xl">
              of dermal collagen is lost during the
            </span>
            <span className="font-sb-empire font-black text-[color:var(--highlight)] italic text-6xl max-w-md text-center">
              first 5 years of menopause
            </span>
            <span className="font-sb-kingdom font-light text-3xl max-w-lg text-center">
              and decreases by an additional 2.1% every year after
            </span>
            <ButtonLink href="#" name="Try m3 now" />
          </p>
        </div>
      </div>
    </Section>
  )
}

export { StatSection }
