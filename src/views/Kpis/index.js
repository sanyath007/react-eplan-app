import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

const KpiView = () => {
  const [kpis, setKpis] = useState([]);

  const fetchKpis = async () => {
    const res = await api.get(`/kpis`);

    setKpis(res.data.items);
  };

  useEffect(() => {
    fetchKpis();
  }, []);

  return (
    <div className="content">
      <div className="card mb-2">
        <div className="card-body">
          <div className="card-title">
            <h5>ค้นหา</h5>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <select name="" className="form-control">
                <option value="">-- เลือกยุทธศาสตร์ --</option>
              </select>
            </div>
            <div className="col-md-6 mb-2">
              <select name="" className="form-control">
                <option value="">-- เลือกกลยุทธ์ --</option>
              </select>
            </div>
            <div className="col-md-12">
              <select name="" className="form-control">
                <option value="">-- เลือกหน่วยงานผู้รับผิดชอบ --</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="card-title">
                <h3>ตัวชี้วัด (KPI)</h3>
              </div>
            </div>
            <div className="col-md-6">
              <Link to="add" className="btn btn-primary float-end">
                <i className="uil uil-plus-circle"></i>
                เพิ่มตัวชี้วัด
              </Link>
            </div>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: '3%', textAlign: 'center' }}>ลำดับ</th>
                <th>ชื่อตัวชี้วัด</th>
                <th style={{ width: '10%', textAlign: 'center' }}>ปี</th>
                <th style={{ width: '10%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {kpis && kpis.map(kpi => {
                return (
                  <tr key={kpi.id}>
                    <td style={{ textAlign: 'center' }}>{kpi.id}</td>
                    <td>{kpi.kpi_name}</td>
                    <td style={{ textAlign: 'center' }}>{kpi.year}</td>
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

export default KpiView