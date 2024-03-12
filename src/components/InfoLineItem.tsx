import orangeArrowIcon from '../../public/icons/orange-arrow-icon.svg'
import Image from 'next/image'

type InfoLineItem = {
  description: string
  showArrow?: boolean
}

const InfoLineItem = ({ description, showArrow = true }: InfoLineItem) => {
  return (
    <div className="flex font-sans font-normal text-[color:var(--white)]">
      {showArrow && (
        <Image
          className="mr-4"
          src={orangeArrowIcon}
          alt="orange-arrow-right"
        />
      )}
      <span>{description}</span>
    </div>
  )
}

export { InfoLineItem }
