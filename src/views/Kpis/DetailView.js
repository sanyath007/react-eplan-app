import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';

const KpiDetailView = () => {
  const { id } = useParams();
  const [kpi, setKpi] = useState(null);

  const fetchKpi = async (_id) => {
    const res = await api.get(`kpis/${_id}`);
    console.log(res);

    setKpi(res.data)
  };

  useEffect(() => {
    fetchKpi(id);
  }, []);

  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>ตัวชี้วัดที่ {kpi?.kpi_no}</h3>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3">
              <span style={{ fontWeight: 'bold', marginRight: '5px' }}>ยุทธศาสตร์ :</span>
              <span>{kpi?.strategy?.strategic?.strategic_name}</span>
            </div>
            <div className="col-md-12 mb-3">
              <span style={{ fontWeight: 'bold', marginRight: '5px' }}>กลยุทธ์ :</span>
              <span>{kpi?.strategy?.strategy_name}</span>
            </div>
            <div className="col-md-12 mb-3">
              <span style={{ fontWeight: 'bold', marginRight: '5px' }}>ตัวชี้วัด :</span>
              <span>{kpi?.kpi_name}</span>
            </div>
            <div className="col-md-12 mb-3">
              <span style={{ fontWeight: 'bold', marginRight: '5px' }}>หน่วยงาน :</span>
              <span>{kpi?.owner_depart}</span>
            </div>
            <div className="col-md-12 mb-3">
              <span style={{ fontWeight: 'bold', marginRight: '5px' }}>ผู้รับผิดชอบ :</span>
              <span>{kpi?.owner_person}</span>
            </div>
          </div>

          <hr className="mb-2 mt-0" />

          <h5>ผลการดำเนินงาน</h5>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th rowSpan={2} style={{ textAlign: 'center' }}>เป้าหมายรวม</th>
                <th colSpan={3} style={{ textAlign: 'center' }}>เป้าหมาย</th>
                <th colSpan={3} style={{ textAlign: 'center' }}>ผลงาน</th>
                <th rowSpan={2} style={{ width: '15%', textAlign: 'center' }}>ผลการประเมิน</th>
              </tr>
              <tr>
                <th style={{ width: '10%', textAlign: 'center' }}>2564</th>
                <th style={{ width: '10%', textAlign: 'center' }}>2565</th>
                <th style={{ width: '10%', textAlign: 'center' }}>2566</th>
                <th style={{ width: '10%', textAlign: 'center' }}>2564</th>
                <th style={{ width: '10%', textAlign: 'center' }}>2565</th>
                <th style={{ width: '10%', textAlign: 'center' }}>2566</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center' }}>{kpi?.target_total}</td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
              </tr>
            </tbody>
          </table>

          <hr className="mb-2 mt-0" />

          <h5>แผนงานโครงการ</h5>
          <div>
            <ul>
              <li>โครงการ 1</li>
              <li>โครงการ 2</li>
              <li>โครงการ 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KpiDetailView;