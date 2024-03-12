type StepProps = {
  number: number
  description: string
}

const Step = ({ number, description }: StepProps) => {
  return (
    <div className="flex mb-5">
      <div className="font-sb-empire font-black text-5xl mr-5">{number}.</div>
      <div className="font-sb-kingdom font-normal text-xl max-w-sm leading-7">
        {description}
      </div>
    </div>
  )
}

export { Step }
