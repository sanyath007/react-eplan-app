import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

const ProjectView = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await api.get(`/projects`);

    setProjects(res.data.items);
  };

  useEffect(() => {
    fetchProjects();
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
            <div className="col-md-6">
              <select name="" className="form-control">
                <option value="">-- เลือกตัวชี้วัด --</option>
              </select>
            </div>
            <div className="col-md-6">
              <select name="" className="form-control">
                <option value="">-- เลือกหน่วยงานผู้รับผิดชอบ --</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              <div className="col-md-6">
                <h3>แผนงานโครงการ (Projects)</h3>
              </div>
              <div className="col-md-6">
                <Link to="add" className="btn btn-primary float-end">
                  <i className="uil uil-plus-circle"></i>
                  เพิ่มโครงการ
                </Link>
              </div>
            </div>
          </div>

          <table className="table table-striped" style={{ fontSize: '14px' }}>
            <thead>
              <tr>
                <th style={{ width: '3%', textAlign: 'center' }}>ลำดับ</th>
                <th>โครงการ</th>
                <th style={{ width: '30%' }}>ตัวชี้วัด</th>
                <th style={{ width: '15%' }}>หน่วยงาน</th>
                <th style={{ width: '10%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects && projects.map((project, index) => {
                return (
                  <tr key={project.id}>
                    <td style={{ textAlign: 'center' }}>{index+1}</td>
                    <td>{`${project.project_no}-${project.project_name}`}</td>
                    <td>
                      <p className="m-0">{project.kpi?.kpi_name}</p>
                      <p className="m-0">กลยุทธ์: {project.kpi?.strategy.strategy_name}</p>
                    </td>
                    <td>
                      <p className="m-0">{project.owner_depart?.depart_name}</p>
                      {project.owner_person && (
                        <p className="m-0">
                          {`${project.owner_person?.person_firstname} ${project.owner_person?.person_lastname}`}
                        </p>
                      )}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div className="btn-group">
                        <Link to={`${project.id}`} className="btn btn-primary btn-sm">
                          <i className="uil uil-search"></i>
                        </Link>
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

export default ProjectView;
