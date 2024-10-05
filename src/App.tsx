import { ChangeEvent, FormEvent, useState } from "react";
import ProductCards from "./components/ProductCards";
import { formInputsList, productList } from "./data";
import MyModal from "./ui/Modal";
import Button from "./ui/Button";
import Inputs from "./ui/Inputs";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation/ProductValidation";

function App() {
  const defultData = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const data = productList.map((item) => {
    return <ProductCards product={item} key={item.id} />;
  });
  const [DataProduct, setdataProduct] = useState<IProduct>(defultData);
  //  Hnalers
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setdataProduct({ ...DataProduct, [name]: value });
  };

  const renderInputs = formInputsList.map((input) => (
    <div className="my-3 flex flex-col" key={input.id}>
      <label htmlFor={input.name}>{input.label} :</label>
      <Inputs
        id={input.id}
        value={DataProduct[input.name]}
        onChange={onChangeHandler}
        type="text"
        name={input.name}
      />
    </div>
  ));
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = DataProduct;
    const Errors = productValidation({ title, description, imageURL, price });

    const hasErrorMsg =
      Object.values(Errors).some((value) => value === "") &&
      Object.values(Errors).every((value) => value === ""); // Check if there's any error message

    console.log(Errors); // This will log true if there are errors and false if there are none
    console.log(hasErrorMsg); // This will log true if there are errors and false if there are none

    // Optionally, you can handle the form submission if there are no errors
    if (!hasErrorMsg) {
      // Proceed with form submission logic (e.g., send data to an API or update state)
    } else {
      // Handle errors (e.g., display them to the user)
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const HnadelCancel = () => {
    setdataProduct(defultData);
    setIsOpen(false);
  };

  return (
    <div className=" container  m-4">
      <Button onClick={openModal} className={" bg-cyan-700 mb-2 ms-5 "}>
        {" "}
        Add Product{" "}
      </Button>
      <div className="  mx-auto grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 gap-3 ">
        <MyModal
          title={"Add A New Product"}
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <form onSubmit={submitHandler}>
            {renderInputs}
            <div className="flex   space-x-1">
              <Button
                width={"w-full"}
                className={" bg-cyan-700 "}
                type="submit"
              >
                submit
              </Button>
              <Button
                onClick={HnadelCancel}
                width={"w-full"}
                className={"bg-gray-500 hover:bg-slate-800 "}
              >
                Cancel{" "}
              </Button>
            </div>
          </form>
        </MyModal>
        {data}
      </div>
    </div>
  );
}

export default App;
