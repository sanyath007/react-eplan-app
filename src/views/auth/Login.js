import React from 'react'

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="">Username :</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="">Password :</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-12 mb-3">
            <button className="btn btn-primary float-end mb-0">Log in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login