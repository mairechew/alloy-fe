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
  showArrow?: boolean
}

const ButtonLink = ({ href, name, showArrow = true }: ButtonProps) => {
  return (
    <Link
      className={`uppercase flex flex-row items-center justify-center bg-fire text-white p-4 hover:bg-fireHover focus:outline-none focus:ring focus:ring-blue max-w-max mt-10 text-base`}
      href={href}
      target="_blank"
    >
      <span className="mr-3">{name}</span>
      {showArrow && <Image src={arrow} alt="arrow-right" />}
    </Link>
  )
}

export { ButtonLink }
