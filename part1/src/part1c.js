import { useState } from 'react'

const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {
  const [counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)

  return (
    <div>
    <Display counter={counter}/>
    <Button 
    handleClick={increaseByOne}
    text = 'Sumar'
    />
    <Button 
    handleClick={decreaseByOne}
    text = 'Restar'
    />
    <Button 
    handleClick={setZero}
    text = 'Cero'
    />
    </div>
  )
}
export default App