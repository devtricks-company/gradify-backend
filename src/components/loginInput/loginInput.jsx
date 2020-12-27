import React from 'react'

const LoginInput = ({labelName,placeholder,value,change,name,type}) => {

    const changeHandler = (e) => {
        change(e.target);
    }
    return (
        <div className="login_input">
            <label htmlFor={name}>{labelName}</label>
            <input type={type} name={name} id={name} placeholder={placeholder}
            value={value}
            onChange={changeHandler}
            />
        </div>
    )
}

export default LoginInput
