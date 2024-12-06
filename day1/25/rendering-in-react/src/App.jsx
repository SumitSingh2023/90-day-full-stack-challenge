import { useState } from 'react'
import './App.css'

function App() {
  const [selectedValue, setSelectedValue] = useState('')

  function handleChange(e) {
    setSelectedValue(e.target.value)
    console.log(e.target.value)
  }

  function handleCheckbox(e){
    console.log(e.target.checked)
    console.log(e.target.checked ? 'checked' : "unchecked")
    console.log(e.target.checked)
    
  }

  function handletypeText(e){
    console.log(e.target.value)
  }

  return (
    <>
      <button onClick={() => console.log('clicked')}>Click</button>
      <br />
      <br />

      <h1>Selected value : {selectedValue}</h1>

      <select onChange={handleChange}>
        <option value="">select option</option>
        <option value="option1">option-1</option>
        <option value="option2">option-2</option>
        <option value="option3">option-3</option>
      </select>
      <br />
      <br />
      <input type="checkbox" onChange={handleCheckbox}/>

      <br />
      <br />
      <input type="text" onChange={handletypeText}/>

    </>
  )
}

export default App
