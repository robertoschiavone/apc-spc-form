import Radio from "./RadioButton"
import Legend from "./Legend"

type Props = {
  label: string
  name: string
  choices: string[]
  required?: boolean
}

const RadioInput = ({ label, name, choices, required = false }: Props) => (
  <>
    <Legend label={label} required={required} />
    {choices.map((choice, i) => (
      <Radio key={i} value={i + 1} label={choice} name={name}
             required={required} />
    ))}
  </>
)

export default RadioInput
