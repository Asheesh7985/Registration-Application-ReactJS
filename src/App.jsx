import { useEffect, useState } from 'react'
import './style.css'

function App() {
  const data = {name:'',email:'',password:''}
  const [inputData, setInputData] = useState(data)
  const [flag, setFlag] = useState(false)
  useEffect(()=>{
    console.log('Registerd')
  },[flag])
  function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
      alert('All Fields Are Mandatory!')
    }
    else{
      setFlag(true)
    }
  }
  return (
   
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You are Registerd Successfully!</h2>:"" }</pre>
      <form className='container' onSubmit={handleSubmit}>
         <div className='header'>
          <h1>Registration Form</h1>
         </div>
         <div>
             <input type='text' placeholder='Enter Your Name' name='name' 
             value={inputData.name}  onChange={handleData}/>
         </div>
         <div>
             <input type='email' placeholder='Enter Your Email' name='email' 
             value={inputData.email} onChange={handleData}/>
         </div>
         <div>
             <input type='password' placeholder='Enter Your password' name='password' 
             value={inputData.password} onChange={handleData}/>
         </div>
         <div>
          <button type='submit'>Submit</button>
         </div>
      </form>
    </>
  )
}

export default App
