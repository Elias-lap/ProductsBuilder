export const productValidation = ( producrt : {
  title: string;
  description: string;
  imageURL: string;
  price: string;
})=>{

  const Errors :{
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = 
{  title : '',
  description : '',
  imageURL : '',
  price : '' }

  if(producrt.title.trim() || producrt.title.length > 10  ||  producrt.title.length < 80 ){
    Errors.title =`Product tilte must be between 10 and 80 characters`
  }
return Errors
}