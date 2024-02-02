import React, { useState } from 'react'
import axios from 'axios'
function Registration() {
  const [newUser, setNewUser] = useState({})


  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value
    const newData = { ...newUser };
    newData[field] = value

    setNewUser(newData)


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newUser)

    if (newUser.password !== newUser.re_password) {
      alert("Your password did not match!!")
      return;
    }
    const body = {
      name: newUser.name,
      email: newUser.email,
      employeeId: newUser.employeeId,
      password: newUser.password,
      passwordConfirm: newUser.passwordConfirm,
      role: newUser.role,
      phoneNumber: newUser.phoneNumber

    }
    axios.post('https://staging-api.erpxbd.com/api/v1/users/signup', body)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))


  }
  return (
    <div className='container'>
      <div className='row pt-5'>
        <div className='col-md-4 border m-auto bg-muted'>
          <form onSubmit={handleSubmit}>
            <h6>Create Account</h6>
            <div className="form-group">
              <p>Fill in the details below to create an account</p>

              <input name="name" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Full Name" />

            </div>
            <div className="form-group">

              <input name="email" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Email" />

            </div>
            <div className="form-group">

              <input name="employeeId" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Id" />

            </div>
            <div className="form-group">

              <input name="phoneNumber" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Mobile Number" />

            </div>




            <div className="form-group">

              <input name="password" onChange={handleChange} type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">

              <input name="passwordConfirm" onChange={handleChange} type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="form-group">

              <input name="role" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Role" />
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" />
                I read and agree terms and conidtion
              </label>

            </div>
            <button type="submit" className="btn btn-primary form-control">Create Account</button>
          </form>

          <div>
            <p>Already have an  account? <span className='text-primary'>Sign in</span></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Registration