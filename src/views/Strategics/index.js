import React, { useEffect, useState } from 'react';
import api from '../../api';

const StrategicView = () => {
  const [strategics, setStrategics] = useState([]);

  const fetchStrategics = async () => {
    const res = await api.get(`/strategics`);

    setStrategics(res.data.items);
  };

  useEffect(() => {
    fetchStrategics();
  }, []);

  return (
    <div className="content">
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            <h3>ยุทธศาสตร์โรงพยาบาล</h3>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: '3%', textAlign: 'center' }}>ลำดับ</th>
                <th style={{ width: '12%', textAlign: 'center' }}>ยุทธศาสตร์ที่</th>
                <th>ชื่อยุทธศาสตร์</th>
                <th style={{ width: '15%', textAlign: 'center' }}>ปี</th>
                <th style={{ width: '8%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {strategics && strategics.map(strategic => {
                return (
                  <tr key={strategic.id}>
                    <td style={{ textAlign: 'center' }}>{strategic.strategic_no}</td>
                    <td style={{ textAlign: 'center' }}>{strategic.strategic_no}</td>
                    <td>{strategic.strategic_name}</td>
                    <td style={{ textAlign: 'center' }}>{`${strategic.start_year} - ${strategic.end_year}`}</td>
                    <td style={{ textAlign: 'center' }}>
                      <div class="btn-group">
                        <a href="#" className="btn btn-warning btn-sm">
                          <i class="uil uil-pen"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-sm">
                          <i class="uil uil-trash-alt"></i>
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

export default StrategicView