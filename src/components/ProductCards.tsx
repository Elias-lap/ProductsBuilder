


import { IProduct } from "../interfaces"
import Button from "../ui/Button"
import { txtSlicer } from "../utilis/Functions"
import Image from "./Image"
interface Iprops {
  product :IProduct
}


const ProductCards  =({product} : Iprops )=> {
 const  textAfterSlice = txtSlicer(product.description )



  return (
    <div className="border rounded-lg p-2 flex  flex-col max-w-fit mx-5 md:max-w-lg  md:mx-0  ">
    <Image className="rounded-md mb-2 h-64" imageUrl ={product.imageURL} alt="product Name" />
  
    <h3 className="text-black font-semibold"> {product.title}</h3>
    <p className="text-gray-400">{textAfterSlice}</p>
   


       <div className="flex space-x-2 my-2   ">
        <span className="w-5 h-5 bg-red-700 rounded-full"></span>
        <span className="w-5 h-5 bg-gray-700 rounded-full"></span>
        <span className="w-5 h-5 bg-green-700 rounded-full" ></span>
    
    </div>

    <div className="flex justify-between items-center">
      <span>${product.price} </span>
    
      <Image className="w-10 h-10 rounded-full object-center" imageUrl ={product.category.imageURL} alt={product.category.name}  />
    </div>

    <div className="flex items-center  justify-between space-x-2 my-2">
      <Button onClick={()=>console.log("Edit")} width ={'w-full'} className ={' bg-cyan-700'} >  Edit</Button>
      <Button  onClick={()=>console.log("Destroid")}  width ={'w-full'}  className ={' bg-red-800 '} >   Destroid  </Button>
      
    
    

    </div>
  </div>



  )
}
export default ProductCards