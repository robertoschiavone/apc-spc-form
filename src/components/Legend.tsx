type Props = {
  label: string,
  required: boolean
}

const Legend = ({ label, required }: Props) =>
  <legend className="mb-2 flex items-center">
    <span className="text-sm font-medium text-gray-300">{label}</span>
    {required && <span className="mx-1 text-red-500">*</span>}
  </legend>

export default Legend
