import React, { useState,useEffect,useReducer} from 'react'
import style from './Login.module.css'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
const emailReducer = (state, action) => {
    if (action.type == 'USER_INPUT') {
        return {
            value: action.val, isValid: action.val.includes('@')
        }
    }
    if (action.type == 'INPUt_BLUR') {
        return {
            value: state.value, isValid: state.value.includes('@')
        }
    }
    return {
        value: '', isValid:null
    }

}
const passwordReducer = (state,action) => {

}
const Login = (props) => {
    

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: undefined })
    const { isValid: emailIsValid } = emailState

    const [enteredmail, setmail] = useState('')
    const [emailValid, setemailValid] = useState()
    const [enteredpassword, setpassword] = useState('')
    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormValid(emailIsValid)
            setFormValid(enteredpassword.trim().length > 6 && enteredmail.includes('@'))
        }, 500)
        return () => {
            clearTimeout(identifier)
        }
       
    }, [enteredmail, enteredpassword])
      //[emailIsValid,passwordisValid] so only  define valid statement useEffect run 
    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
        setmail(event.target.value)
    
    }
    const passwordChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
        setpassword(event.target.value)
       
    }
    const formHandler = (event) => {
        event.preventDefault()
        props.setCred(enteredmail, enteredpassword)
       
    }
    const validateEmail = () => {
        dispatchEmail({ type: 'INPUT_BLUR' })
        setemailValid(enteredmail.includes('@'))
    }
    return (
        <Card className={style.login}>
            <form onSubmit={formHandler}>
                <div className={` ${style.control} ${emailValid=== false ? style.invalid :''}`}>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={enteredmail} onChange={emailChangeHandler} onBlur={validateEmail} />
                    <label htmlFor="password">Password</label>
                    <input type="password" value={enteredpassword} onChange={passwordChangeHandler} />
                </div>
                <div className={style.action}>
                    <Button type="submit" disabled={!formValid}>Login</Button>
                    </div>
        </form>
        </Card>
       
        )
}
export default Login