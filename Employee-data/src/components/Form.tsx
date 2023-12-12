import  { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Form = () => {
  const [name, setname] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setemail] = useState('')
    const [formData, setFormData] = useState({
        
      });
      const changeName = (e)=>{
        setname(e.target.value)
      }
      const changePhonenumber = (e)=>{
        setphoneNumber(e.target.value)
      }
      const changeEmail = (e)=>{
        setemail(e.target.value)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
          name,
          phoneNumber,
          email,
        })
        localStorage.setItem('formDetails', JSON.stringify(formData));
        setname('')
        setphoneNumber('')
        setemail('')
      };
      
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={name}
        onChange={changeName}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={changePhonenumber}
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={changeEmail}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
    </div>
  )
}

export default Form
