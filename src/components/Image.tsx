interface IuPrpos{
 imageUrl :string,
 alt : string ,
 className : string
}

const Image  =( {imageUrl ,alt , className} :IuPrpos)=> {
  return (
    <img className={className} src={imageUrl} alt={alt} />
  )
}
export default Image