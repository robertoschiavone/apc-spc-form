import Label from "./Label"

type Props = {
  type: string
  label: string
  name: string
  required?: boolean
}

const TextInput = ({ type, label, name, required = false }: Props) => (
  <Label name={name} text={label} required={required}>
    <input
      type={type}
      id={name}
      name={name}
      className="w-full min-w-72 h-12 rounded-md border border-gray-300 px-3 py-2
          shadow-sm invalid:border-red-500 invalid:outline-none
          invalid:ring-red-500 focus:border-indigo-500 focus:outline-none
          focus:ring-indigo-500"
      required={required}
    />
  </Label>
)

export default TextInput
