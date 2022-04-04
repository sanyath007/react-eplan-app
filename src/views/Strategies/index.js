import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import ObjectivesModal from './ObjectivesModal';

const StrategyView = () => {
  const [strategies, setStrategies] = useState([]);
  const [objectives, setObjectives] = useState([]);
  const [openObjectives, setOpenObjectives] = useState(false);

  const fetchStrategies = async () => {
    const res = await api.get('/strategies');
    console.log(res);

    setStrategies(res.data.items);
  };
  useEffect(() => {
    fetchStrategies();
  }, []);

  return (
    <div className="content">

      <ObjectivesModal
        show={openObjectives}
        handleClose={() => setOpenObjectives(false)}
        objectives={objectives}
      />

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
                <th style={{ width: '3%', textAlign: 'center' }}>ลำดับ</th>
                <th style={{ width: '10%', textAlign: 'center' }}>กลยุทธ์ที่</th>
                <th>ชื่อกลยุทธ์</th>
                <th style={{ width: '30%' }}>ยุทธศาสตร์</th>
                <th style={{ width: '10%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {strategies && strategies.map(strategy => {
                return (
                  <tr key={strategy.id}>
                    <td style={{ textAlign: 'center' }}>{strategy.id}</td>
                    <td style={{ textAlign: 'center' }}>{strategy.strategy_no}</td>
                    <td>
                      <span className="mr-2">
                        {strategy.strategy_name}
                      </span>
                      {strategy.objectives.length > 0 && (
                        <a href="#" onClick={() => {
                          setOpenObjectives(true);
                          setObjectives(strategy.objectives);
                        }}>
                          <i className="uil uil-chat"></i>
                        </a>
                      )}
                    </td>
                    <td>
                      {`ยุทธศาสตร์ที่ ${strategy.strategic?.strategic_no} ${strategy.strategic?.strategic_name}`}
                    </td>
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
  )
}

export default StrategyView