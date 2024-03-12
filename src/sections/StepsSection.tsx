import Image from 'next/image'
import womanReading from '../../public/images/woman_reading.png'
import { stepsMap } from '../../public/copy/copy'
import { GridLayout } from '@/layout/GridLayout'
import { Step } from '@/components/Step'
import { ButtonLink } from '@/components/ButtonLink'
import { Section } from '@/layout/Section'

const StepsSection = () => {
  return (
    <Section className="p-12 mt-10">
      <GridLayout>
        <div className="flex justify-end items-center">
          <Image
            src={womanReading}
            className="align-right"
            alt="alloy-woman-reading"
            sizes="100vw"
            style={{
              height: 'auto',
              maxWidth: '587px',
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <div className="font-sb-kingdom font-light text-5xl">
            Ready to get
          </div>
          <div className="font-sb-empire font-black italic text-5xl mb-10">
            M3?
          </div>
          {Object.entries(stepsMap).map(([stepNumber, description]) => {
            const key = parseInt(stepNumber)
            return <Step key={key} number={key} description={description} />
          })}
        </div>
      </GridLayout>
      <div className="flex justify-center">
        <ButtonLink href="#" name="Get your m3" />
      </div>
    </Section>
  )
}

export { StepsSection }
