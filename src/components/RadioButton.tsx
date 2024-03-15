import { useState } from "react"
import Label from "./Label"

type Props = {
  value: number,
  label: string,
  name: string,
  required?: boolean
}


const RadioButton = ({ value, label, name, required = false }: Props) => {
  const [checked, setChecked] = useState(false)
  return (
    <Label name={name + "_" + value} text={label}>
      <input
        type="radio"
        value={value}
        name={name}
        required={required}
        className="order-first mr-2 h-8 rounded-full border-2 border-solid
        border-neutral-300 focus:border-red-500"
        checked={checked}
        onChange={() => setChecked(state => !state)}
      />
    </Label>
  )
}

export default RadioButton
