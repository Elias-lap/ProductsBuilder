import { ButtonHTMLAttributes, ReactNode } from "react"


interface IuPrpos extends ButtonHTMLAttributes<HTMLButtonElement> {
  children :ReactNode,
  className? :string ,
  width? : 'w-full' |' w-fit ' ,

}

const Button  =( {  children  , className ,width ,...rest} :IuPrpos)=> {
  return (
  <button {...rest} className={`${className} ${width} p-2  text-center rounded-lg text-yellow-50`}>{children}</button>
  )
}
export default Button