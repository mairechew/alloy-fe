import { GridLayout } from '@/layout/GridLayout'
import estriol from '../../public/images/estriol.png'
import glycerin from '../../public/images/glycerin.png'
import oleic_acid from '../../public/images/oleic_acid.jpeg'
import vitamin_e from '../../public/images/vitamin_e.jpeg'
import Image from 'next/image'
import {
  IngredientsDescription,
  IngredientsWrap,
} from '@/components/Ingredient'

const styles = {
  labelWrapper: 'rounded-full p-6 h-20 w-20 md:h-40 md:w-40',
  offWhiteBg: 'bg-offWhite',
  highlightBg: 'bg-highlight',
  imgContainer: 'md:h-40 md:w-40 rounded-full',
}

const IngredientsSection = () => {
  return (
    <div className="text-[color:var(--primary)] text-4xl font-semibold p-20">
      <GridLayout className="md:grid-cols-[30%_1fr]">
        <h2 className="font-sans">
          Science-backed
          <br /> ingredients
        </h2>
        <div className="grid grid-cols-1">
          <div className="overflow-x-scroll">
            <div className="flex gap-20">
              <IngredientsWrap label="Estriol">
                <div className={`${styles.labelWrapper} ${styles.highlightBg}`}>
                  <Image src={estriol} alt="estriol-img" />
                </div>
              </IngredientsWrap>
              <IngredientsWrap label="Glycerin">
                <div className={`${styles.labelWrapper} ${styles.offWhiteBg}`}>
                  <Image src={glycerin} alt="glycerin-img" />
                </div>
              </IngredientsWrap>
              <IngredientsWrap label="Oleic Acid">
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.imgContainer}
                    src={oleic_acid}
                    alt="oleic-acid-img"
                  />
                </div>
              </IngredientsWrap>
              <IngredientsWrap label="Vitamin E">
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.imgContainer}
                    src={vitamin_e}
                    alt="vitamin-e-img"
                  />
                </div>
              </IngredientsWrap>
            </div>
          </div>
          <IngredientsDescription text="Topical Estriol can help maintain skin health by increasing collagen production, retaining and restoring skin moisture, increasing skin firmness, decreasing pore size, decreasing wrinkle depth, and increasing skin elasticity." />
        </div>
      </GridLayout>
    </div>
  )
}

export { IngredientsSection }
