export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const Errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = { title: "", description: "", imageURL: "", price: "" };

  const isValidUrl = (url: string) => /^(https?:\/\/[^\s/$.?#].[^\s]*)$/.test(url);

  // Check title length
  if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
    Errors.title = `Product title must be between 10 and 80 characters`;
  }
  
  // Check description length
  if (!product.description.trim() || product.description.length < 10 || product.description.length > 800) {
    Errors.description = `Product description must be between 10 and 800 characters`;
  }
  
  // Check image URL validity
  if (!product.imageURL.trim() || !isValidUrl(product.imageURL)) {
    Errors.imageURL = `A valid image URL is required`;
  }

  // Check price validity
  if (!product.price.trim() || isNaN(Number(product.price))) {
    Errors.price = `A valid price is required`;
  }

  return Errors;
};
