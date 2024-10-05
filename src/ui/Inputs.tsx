import { InputHTMLAttributes } from "react"

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {

}

const Inputs  =({...rest}  :Iprops)=> {
  return (
    
  
    <input {...rest} className=" text-md shadow-md py-2 my-2 border focus:outline-none focus:ring-1 focus:ring-indigo-500 border-gray-300 min-w-max  rounded " />
  
  )
}
export default Inputs