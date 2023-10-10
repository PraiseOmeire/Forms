// import { useState } from 'react'

// const useInput = (validateValue) => {
//     const [enteredValue, setEnteredValue] =  useState('')
//     const [isTouched, setIsTouched] = useState(false)

//     const valueIsValid = validateValue(enteredValue);
// const hasError = !valueIsValid && isTouched;

// const valueChangeHandler = event => {
//    setEnteredValue(event.target.value)
//   }

//   const inputBlurHandler = event => {
//     setIsTouched(true)
//   }

//   const reset = () => {
//     setEnteredValue('')
//     setIsTouched(false)
//   }

// return {
//     value: enteredValue, 
//     isValid: valueIsValid, 
//     hasError, 
//     valueChangeHandler, 
//     inputBlurHandler,
// }
// }


// export default useInput

// import { useState } from "react"


// const useValue = (validateValue) => {
// const [enteredValue, setEnteredValue] = useState('')
// const [enteredValueIsTouched, setEnteredValueIsTouched] = useState()


// //checking validity

// const valueIsValid = validateValue(enteredValue)
// const hasError = !validateValue && enteredValueIsTouched

// // event handlers 
// const valueInputChangeHandler = event => {
//     setEnteredValue(event.target.value)

// }

// const valueInputBlurHandler = event => {
//     setEnteredValueIsTouched(true)
// }


// const reset = ()=> {
//     setEnteredValue('')
//     setEnteredValueIsTouched(false)
// }

// return {
//     value: enteredValue,
//     isValid: valueIsValid,
//     hasError,
//     valueInputChangeHandler,
//     valueInputBlurHandler,
// }
// }


// export default useValue;