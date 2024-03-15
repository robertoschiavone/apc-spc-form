import TextInput from "../components/TextInput"
import RadioInput from "../components/RadioInput"
import SelectInput from "../components/SelectInput"
import Choices from "../interfaces/Choices"

type InputFieldProps = {
  type: string
  name: string
  label: string
  choices?: Choices
  required?: boolean
}

const InputField = (props: InputFieldProps) => {
  let component = undefined
  switch (props.type) {
    case "date":
    case "email":
    case "text":
    case "tel":
      component = <TextInput {...props} />
      break
    case "radio":
      component = <RadioInput {...props} />
      break
    case "select":
      component = <SelectInput {...props} />
      break
    default:
      throw Error(props.type + " not defined yet!")
  }

  return (
    <>
      <div className="my-2 w-full">
        {component}
      </div>
    </>
  )
}

export default InputField
