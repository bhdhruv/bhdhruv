import React from 'react'
import {useFormik} from 'formik'
 
//object for taking values as a state 
const initialValues={
    name:"",
    email:"",
    channel:""
}
// onsubnit in which we takes the values from formik state check by making console
const onSubmit=values =>{
    console.log(values);
}
//Validate is the funtion which takes values as a  new object 
const validate =values=>{
    let error={}
        if(!values.name){
            error.name='required'
        }
        if(!values.email){
            error.email='required'
        }
        else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
            error.email='Invalid Email'
        }
        if(!values.channel){
            error.channel='required'
        }
       return error 

}

export default function Validations() {
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
    })
   console.log('forms error ',formik.errors);
    
   
  return (
    <>

    <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" id="name" onChange={formik.handleChange}value={formik.values.name} /> 
       { formik.errors.name ? <div>{formik.errors.name}</div>:null}
        <br /><br/>
        <label  htmlFor='email'>Email</label>
        <input type="text" name="email" id="email" onChange={formik.handleChange}value={formik.values.email} />
        { formik.errors.email ? <div>{formik.errors.email}</div>:null}
        <br /><br/>       
        <label htmlFor='channel'>Channel</label>
        <input type="text" name="channel" id="channel"   onChange={formik.handleChange}value={formik.values.channel}/>
        { formik.errors.channel ? <div>{formik.errors.channel}</div>:null}
         <br /> <br />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}
