import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old </p>
    </div>
  )
}

const sum = (p1, p2) =>{
  console.log(p1)
  console.log(p2)
  return p1+p2
}
const Footer = () => {
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
      <Footer/> [Usada de una manera, como resultado se vera el componente*]
    </>
    
    )
    const result = sum(15,23)
    console.log(result)
}


ReactDOM.render(<App/>, document.getElementById('root')) 