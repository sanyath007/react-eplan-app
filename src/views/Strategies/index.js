import React from 'react'
import { Link } from 'react-router-dom'

const StrategyView = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              <div className="col-md-6">
                <h3>กลยุทธ์</h3>
              </div>
              <div className="col-md-6">
                <Link to="add" className="btn btn-primary float-end">
                  <i className="uil uil-plus-circle"></i>
                  เพิ่มกลยุทธ์
                </Link>
              </div>
            </div>
          </div>{/* /.card-title */}

          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StrategyView