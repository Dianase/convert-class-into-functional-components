import {useState, useEffect} from 'react'

export default function Counter2({name}) {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${counter} times`
    return () => {
      document.title ='!! React App!!'
    }
  },[counter])
  return(
    <>
      <h1> {name} clicked the button {counter} times </h1>
      <button onClick={() => setCounter(counter +1)}>Click me</button>
    </>
  )
}




// //     this.state = {
// //       counter:0
// //     }
// //   }
// //   componentDidMount(){
// //     document.title = `You clicked ${this.state.counter} times`
// //   }
// //   componentDidUpdate(){
// //     document.title = `You clicked ${this.state.counter} times`
// //   }
// //   render(){
// //     const { counter } = this.state
// //     return (
// //       <>
// //         <h1>
// //           You clicked the button {counter} times.
// //         </h1>
// //         <button onClick={()=> this.setState({ counter: counter + 1})}>Click Me</button>

// //       </>
// //     )
// //   }
// // }