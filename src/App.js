// import logo from './logo.svg';

import { TextField } from '@mui/material';
import './App.css';
import { useFormik } from 'formik';
import * as yup from "yup"

function App() {

  const formik=useFormik({
    initialValues:{text:"",text1:"",email:"",password:"",password1:""},
    onSubmit:(values)=>{
      console.log(values)
    },
    validationSchema:yup.object({
  text:yup.string().required("fill the valid name").min(8,"min 8 character need").max(12,"max 12 character need"),
  text1:yup.string().required("fill the valid name").min(8,"min 8 character need").max(12,"max 12 character need"),
  email:yup.string().required("fill the valid email").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"please fill matched email"),
  password:yup.string().required("fill the valid password").min(8,"min 8 character need").max(12,"max 12 character need"),
  password1:yup.string().required("fill the valid password").min(8,"min 8 character need").max(12,"max 12 character need"),
})
  })
  return (
    <div >
    {/* {JSON.stringify(formik.values)} */}
    <form className='form' onSubmit={formik.handleSubmit} >
    <label>FIRST NAME</label>
     <TextField  className="outlined-basic" name='text' onChange={formik.handleChange} onBlur={formik.handleBlur} variant="outlined" />
     
     {formik.errors.text && formik.touched.text?formik.errors.text:""}


     <label>LAST NAME</label>
     <TextField  className="outlined-basic"  name='text1' onChange={formik.handleChange} onBlur={formik.handleBlur} variant="outlined" />
     
     {formik.errors.text1&&formik.touched.text1?formik.errors.text1:""}

     <label>EMAIL</label>
     <TextField  className="outlined-basic"  name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} variant="outlined" />
     
     {formik.errors.email && formik.touched.email?formik.errors.email:""}

     <label>PASSWORD</label>
     <TextField className="outlined-basic" type='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} variant="outlined" />
     
     {formik.errors.password && formik.touched.password?formik.errors.password:""}
     
     <label>CONFIRM PASSWORD</label>
     <TextField  className="outlined-basic" type='password' name='password1' onChange={formik.handleChange} onBlur={formik.handleBlur} variant="outlined" />
     
     {formik.errors.password1 && formik.touched.password1?formik.errors.password1:""}
     
     <button className='button_submit' type='submit'  >SUBMIT</button>
     
     </form>
    </div>
  );


}
export default App;
