import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("Dragon Ball");
  
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 1) {
        onNewCategory(inputValue.trim());
        setInputValue("");
    }
    // setCategories((categories) => [inputValue, ...categories]);
  }


  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>

  )
}
