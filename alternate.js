// import { useEffect, useState } from "react";


// const SimpleInput = (props) => {
//   // const nameInputRef = useRef()
// const [enteredName, setEnteredName] =  useState('')
// // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
// const [enteredNameTouched, setEnteredNameTouched] = useState(false)
// // const [formIsValid, setFormIsValid] = useState(false)

// const enteredNameIsValid = enteredName.trim() !== '';

// const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched



// //form input validity

// useEffect(() => {
// if(enteredNameIsValid) {
//   setFormIsValid(true)
// }else{
//   setFormIsValid(false)
// }
// }, [enteredNameIsValid])

// const nameInputChangeHandler = event => {

//   setEnteredName(event.target.value)

// // if(enteredName.trim() !== ''){
// //   setEnteredNameIsValid(true)
// // }

// }

// const nameInputBlurHandler = event => {
//   setEnteredNameTouched(true)
// }

// const formSubmissionHandler = event => {
// event.preventDefault()

// setEnteredNameTouched(true)

// if(!enteredNameIsValid){
//   return;
// }
// // setEnteredNameIsValid(true)

// console.log(enteredName)

// // const enteredValue = nameInputRef.current.value;
// // console.log(enteredValue);

// // nameInputRef.current.value = ' ' // not ideal. dont manipulate the dom

// setEnteredName('');
// setEnteredNameTouched(false);
// };



// const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';


//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input 
//          type='text' 
//          id='name' 
//          onChange= {nameInputChangeHandler}
//         onBlur={nameInputBlurHandler}
//         value={enteredName}/>

//         {nameInputIsInvalid && <p className="error-text">Invalid input</p>}
//       </div>
//       <div className="form-actions">
//         <button disable={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;





// user input using state\

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



//basic form

// import { useState } from 'react'

// const BasicForm = (props) => {
//   // definition functions to call state
//   const [enteredFirstName, setEnteredFirstName] = useState('')
//   const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false)

//   const [enteredLastName, setEnteredLastName] = useState('')
//   const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false)

//   const [enteredEmail, setenteredEmail] = useState('')
//   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)


//   //set validdity
//   const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
//   const firstNameInputIsInvalid = !enteredFirstNameIsValid && enteredFirstNameTouched

//   const enteredLastNameIsValid = enteredLastName.trim() !== ''
//   const lastNameInputIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched

//   const enteredEmailIsValid = enteredEmail.includes('@')
//   const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

//   let formIsValid = false

//   //form input validity
//   if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
//     formIsValid = true
//   }

//   //event change handlers
//   const firstNameInputChangeHandler = event => {
//     setEnteredFirstName(event.target.value)
//   }

//   const lastNameInputChangeHandler = event => {
//     setEnteredLastName(event.target.value)
//   }

//   const emailInputChangeHandler = event =>{
//     setenteredEmail(event.target.value)
//   }

//   //event touched handler
//   const firstNameInputBlurHandler = event => {
//     setEnteredFirstNameTouched(true)
//   }

//   const lastNameInputBlurHandler = event => {
//     setEnteredLastNameTouched(true)
//   }

//   const emailInputBlurHandler = event => {
//     setEnteredEmailTouched(true)
//   }

//   //Form submission
//   const formSubmissionHandler = event => {
//     event.preventDefault()

//     setEnteredFirstNameTouched(true)
//     setEnteredLastNameTouched(true)
//     setEnteredEmailTouched(true)

//   if(!enteredFirstNameIsValid){
//     return;
//   }

//   setEnteredFirstName('')
//   setEnteredFirstNameTouched(false)

//   setEnteredLastName('')
//   setEnteredLastNameTouched(false)

//   setenteredEmail('')
//   setEnteredEmailTouched(false)

//   }

// // input class control
//   const firstNameIputClasses = firstNameInputIsInvalid ? 'form-control invalid' : 'form-control';
//   const lastNameIputClasses = lastNameInputIsInvalid ? 'form-control invalid' : 'form-control';
//   const emailIputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className='control-group'>
//         <div className={firstNameIputClasses}>
//           <label htmlFor='name'>First Name</label>
//           <input type='text' id='name'
//           onChange= {firstNameInputChangeHandler}
//           onBlur = {firstNameInputBlurHandler}
//           value={enteredFirstName} />
//           {firstNameInputIsInvalid && <p className='error-text'>Enter a valid First Name</p>}

//         </div>


//         <div className={lastNameIputClasses}>
//           <label htmlFor='name'>Last Name</label>
//           <input type='text' id='name'
//            onChange= {lastNameInputChangeHandler}
//            onBlur = {lastNameInputBlurHandler}
//            value={enteredLastName} />

//         {lastNameInputIsInvalid && <p className='error-text'> Enter a valid Last name</p>}
//         </div>
//       </div>


//       <div className={emailIputClasses}>
//         <label htmlFor='name'>E-Mail Address</label>
//         <input type='text' id='name'
//          onChange= {emailInputChangeHandler}
//          onBlur = {emailInputBlurHandler}
//          value={enteredEmail} />

//       {emailInputIsInvalid && <p className='error-text'> Enter a valid Email</p>}
        
//       </div>
//       <div className='form-actions'>
//       <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default BasicForm;
