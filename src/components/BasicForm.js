
import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const isNotEmpty = value => value.trim() !== '';
  const isEmail = value => value.includes('@');

const {
  value: firstNameValue,
  isValid: enteredFirstNameIsValid,
  hasError: firstNameHasError,
  valueChangeHandler: firstNameChangeHandler,
  inputBlurHandler: firstNameBlurHandler,
  reset: resetFirstName,

} = useInput (isNotEmpty)

const {
  value: lastNameValue,
  isValid: enteredLastNameIsValid,
  hasError: lastNameHasError,
  valueChangeHandler: lastNameChangeHandler, 
  inputBlurHandler: lastNameBlurHandler,
  reset: resetLastName,
} = useInput (isNotEmpty)

const {
  value: emailValue,
  isValid: enteredEmailIsValid,
  hasError: emailHasError,
  valueChangeHandler: emailChangeHandler, 
  inputBlurHandler: emailBlurHandler,
  reset: resetEmail,
} = useInput (isEmail)


  //set validdity
  let formIsValid = false

  //form input validity
  if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
    formIsValid = true
  }


  //Form submission
  const formSubmissionHandler = event => {
    event.preventDefault()

    if(!formIsValid){
      return;
    }

    console.log('submit')
    console.log('firstName, lastName, email')

  resetFirstName()

resetLastName()

resetEmail()

  }

// input class control
  const firstNameIputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameIputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailIputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameIputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
          onChange= {firstNameChangeHandler}
          onBlur = {firstNameBlurHandler}
          value={firstNameValue} />

          {firstNameHasError && <p className='error-text'>Please, Enter First Name</p>}

        </div>


        <div className={lastNameIputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
           onChange= {lastNameChangeHandler}
           onBlur = {lastNameBlurHandler}
           value={lastNameValue} />

        {lastNameHasError && <p className="error-text">  Please, enter a Last name</p>}
        </div>
      </div>


      <div className={emailIputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
         onChange= {emailChangeHandler}
         onBlur = {emailBlurHandler}
         value={emailValue} />

      {emailHasError && <p className='error-text'> Enter a valid Email</p>}
        
      </div>
      <div className='form-actions'>
      <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
