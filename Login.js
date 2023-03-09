import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './Input';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
email:yup.string().required("Email is required field").email("emal is not valid!."),
password:yup.string().min(6,"Password must be at least 6 characters"),
})
export const Login = () => {
    const navigate  = useNavigate()
    const {handleSubmit,register,formState:{errors},setValue ,watch} = useForm(
        {resolver:yupResolver(schema),}
        )
    const formSubmit = (data) =>{
        console.log(data)
        var logdata = JSON.parse(localStorage.getItem('mydata'));
        if(data.email === logdata.email && data.password === logdata.password ){
            localStorage.setItem("loggedin",true);
           navigate('/home')}
        else{
            alert("Wrong email or password")
        }
    }
   
  return (
    <div className="sign-up">
         <h1>Sign In </h1>
         <form onSubmit={handleSubmit(formSubmit)}>
          
           <Input 
          id="email"
          label="Email"
          type="text"
          placeholder="Enter Email"
          register={{...register("email")}}
          errorMessage={errors.email?.message}
          />
           <Input 
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          register={{...register("password")}}
          errorMessage={errors.password?.message}
          />
          
        <button>Sign In</button>
        
      </form>
   

    </div>
  )
}
