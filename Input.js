import React from 'react';
export const Input = ({id,label,placeholder,type,register,errorMessage}) => {
  return (
    <div className="input-group">
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} placeholder={placeholder} {...register}  className={errorMessage? "error" : "Input"}/>
          <span className='error-message'>{errorMessage}</span>
    </div>
  )
}
