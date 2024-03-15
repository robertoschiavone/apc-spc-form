import Label from "./Label"

type Props = {
  name: string,
  label: string,
  choices: string[],
  required?: boolean
}

const SelectInput = ({ name, label, choices, required = false }: Props) => (
  <Label name={name} text={label} required={required}>
    <select
      id={name}
      required={required}
      className="w-full h-12 rounded-md border border-gray-300 px-3 py-2 shadow-sm
       focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
       invalid:border-red-500 invalid:ring-red-500"
    defaultValue="">
      <option hidden disabled value="">
        -- Selezionare un'opzione --
      </option>
      {choices.map((choice, i) =>
          <option value={i + 1} key={i}>
            {choice}
          </option>
      )}
    </select>
  </Label>
)

export default SelectInput
