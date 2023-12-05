import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old </p>
    </div>
  )
}

const footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}
const App = () => {
  
  const name="Juan"
  const age=25
  return (
    <>
      <h1>Greetings</h1>,
      <Hello name="Alison" age={12+3}/>,
      <Hello name={name} age={age}/>,
      <Hello name={name} age="15"/>,
      <footer/> /*Usada de una manera, como resultado se vera el componente*/,
      {Footer()} /*Usada de otra manera, como resultado se vera el codigo html*/,
    </>
    
  )
}

ReactDOM.render(<App/>, document.getElementById('root')) 