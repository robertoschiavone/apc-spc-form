import { fields } from "../assets/form.json"
import InputField from "./InputField"
import Submit from "./Submit.tsx"

const Form = () => {
  return (
    <form
      onSubmit={() => {
        alert("Form inviato con successo")
      }}>
      {fields.map((field, i) => (
        <InputField key={i} {...field} />
      ))}
          <Submit/>

    </form>
  )
}

export default Form
