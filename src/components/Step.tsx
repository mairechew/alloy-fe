type StepProps = {
  number: number
  description: string
}

const Step = ({ number, description}: StepProps) => {
  return <div className="flex">
    <div className='font-sb-empire font-black text-5xl mr-5'>{number}.</div>
    <div className='font-sb-kingdom font-normal text-xl max-w-sm'>{description}</div>
  </div>
}

const stepsMap = {
  1: 'Complete Alloy’s online assessment in 1 minute.',
  2: 'A doctor reviews your information and writes your prescription.',
  3: 'Your prescription is shipped right to your door',
  4: 'Free and unlimited follow-up with your menopause-trained physician.'
}

export { Step, stepsMap }
