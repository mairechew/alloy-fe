import { ReactElement } from 'react'

/**
 * NOTES
 *
 * Use ingredientsMap from /public/copy folder when more descriptions are provided
 */

const IngredientsDescription = ({ text }: { text: string }) => {
  return (
    <div className="text-[color:var(--primary)] text-3xl font-semibold">
      {text}
    </div>
  )
}

const IngredientsLabel = ({ label }: { label: string }) => {
  return (
    <div className="text-[color:var(--primary)] text-xl font-semibold hover:font-bold hover:border-b-8 border-secondary pb-4 w-fit h-fit cursor-pointer">
      {label}
    </div>
  )
}

const IngredientsWrap = ({
  children,
  label,
}: {
  children: ReactElement
  label: string
}) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {children} <IngredientsLabel label={label} />
    </div>
  )
}

export { IngredientsDescription, IngredientsLabel, IngredientsWrap }
