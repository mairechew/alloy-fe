import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../public/icons/white-arrow-icon.svg'

/**
 * NOTES
 *
 * Assuming all buttons displayed in mockup link to another form page,
 * I've used the internal anchor element 'Link' to take advantage
 * of built-in-routing vs. an HTML button for external click events
 */

type ButtonProps = {
  href: string
  name: string
  bgColor?: string
  textColor?: string
  showArrow?: boolean
}

const ButtonLink = ({
  href,
  name,
  bgColor = 'fire',
  textColor = 'white',
  showArrow = true,
}: ButtonProps) => {
  return (
    <Link
      className={`uppercase flex flex-row items-center justify-center bg-${bgColor} text-${textColor} p-4 hover:bg-${bgColor}Hover focus:outline-none focus:ring focus:ring-blue max-w-max mt-10 text-base`}
      href={href}
    >
      <span className="mr-3">{name}</span>
      {showArrow && <Image src={arrow} alt="arrow-right" />}
    </Link>
  )
}

export { ButtonLink }
