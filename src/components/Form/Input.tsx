import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={props.name}
      className="border border-zinc-200 shadow-sm rounded h-10 outline-none px-3"
      {...register(props.name)}
      {...props}
    />
  )
}