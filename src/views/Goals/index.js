import React, { useEffect, useState } from 'react';
import api from '../../api';

const GoalView = () => {
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const res = await api.get(`/goals`);

    setGoals(res.data.items);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="content">
      <div className="card mb-2">
        <div className="card-body">
          <div className="card-title">
            <h5>ค้นหา</h5>
          </div>
          <div className="row">
            <div className="col-md-12 mb-2">
              <select name="" className="form-control">
                <option value="">-- เลือกยุทธศาสตร์ --</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>เป้าประสงค์ (Goals)</h3>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: '3%', textAlign: 'center' }}>ลำดับ</th>
                <th>เป้าประสงค์</th>
                <th style={{ width: '30%' }}>ยุทธศาสตร์</th>
                <th style={{ width: '10%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {goals && goals.map(goal => {
                return (
                  <tr key={goal.id}>
                    <td style={{ textAlign: 'center' }}>{goal.goal_no}</td>
                    <td>{goal.goal_name}</td>
                    <td>{goal.strategic?.strategic_name}</td>
                    <td style={{ textAlign: 'center' }}>
                      <div className="btn-group">
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="uil uil-search"></i>
                        </a>
                        <a href="#" className="btn btn-warning btn-sm">
                          <i className="uil uil-pen"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-sm">
                          <i className="uil uil-trash-alt"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoalView;
