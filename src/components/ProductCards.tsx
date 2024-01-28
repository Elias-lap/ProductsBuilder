// interface IuPrpos{

// }

const ProductCards  =( )=> {
  return (
  <div className="border rounded-lg p-2 flex  flex-col  ">
    <img className=" " src="./imagesProjects/1689796796100.jpeg " alt="product Name" />
    <h3> 2022 Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum omnis sed quae
       impedit odio quaerat nulla repudiandae consectetur nihil ad.</p>
   


       <div className="flex space-x-2 my-2">
        <span className="w-5 h-5 bg-red-700 rounded-full"></span>
        <span className="w-5 h-5 bg-gray-700 rounded-full"></span>
        <span className="w-5 h-5 bg-green-700 rounded-full" ></span>
    
    </div>

    <div className="flex justify-between items-center">
      <span>$500 000 </span>
      <img className="w-10 h-10 " src="./imagesProjects/1689796796100.jpeg " alt="product Name" />
    </div>

    <div className="flex items-center  justify-between space-x-2 my-2">
      <button className=" bg-cyan-700 p-2 w-full text-center rounded-lg text-yellow-50">
        Edit
      </button>
      <button className="bg-red-800 p-2 w-full  text-center rounded-lg text-yellow-50">
        Destroid 
      </button>

    </div>
  </div>


  )
}
export default ProductCards