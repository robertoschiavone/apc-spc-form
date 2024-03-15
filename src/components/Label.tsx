import React from "react"

type Props = {
  name: string
  text: string
  required?: boolean
  children: React.ReactNode
}

const Label = ({ name, text, required = false, children }: Props) => (
  <label
    htmlFor={name}
    className="flex flex-wrap items-center">
    <span className="my-1 text-sm font-medium text-gray-300">{text}</span>
    {required && <span className="m-1 text-red-500">*</span>}
    {children}
  </label>
)

export default Label
