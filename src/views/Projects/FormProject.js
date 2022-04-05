import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import api from '../../api';
import { type } from '@testing-library/user-event/dist/type';

const FormProject = () => {
  const [strategics, setStrategics] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [filteredStrategies, setFilteredStrategies] = useState([]);
  const [kpis, setKpis] = useState([]);
  const [filteredKpis, setFilteredKpis] = useState([]);
  const [factions, setFactions] = useState([]);
  const [departs, setDeparts] = useState([]);
  const [filteredDeparts, setFilteredDeparts] = useState([]);
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

  const initForms = async () => {
    const res = await api.get('/projects/init/forms');

    setStrategics(res.data.strategics);
    setStrategies(res.data.strategies);
    setKpis(res.data.kpis);
    setFactions(res.data.factions);
    setDeparts(res.data.departs);
    setPersons(res.data.persons);
  };

  const handleSubmit = async (values, props) => {
    console.log(values, props);
    const res = await api.post('/projects', values);
    console.log(res);
  };

  useEffect(() => {
    initForms();
  }, []);

  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>เพิ่มโครงการ</h3>
          </div>

          <Formik
            initialValues={{
              project_no: '',
              project_name: '',
              strategic_id: '',
              strategy_id: '',
              kpi_id: '',
              faction_id: '',
              depart_id: '',
              person_id: '',
              year: '',
              remark: ''
            }}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="row">
                    <div className="col-md-2 mb-3">
                      <label htmlFor="">รหัสโครงการ :</label>
                      <input
                        type="text"
                        name="project_no"
                        value={formik.values.project_no}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-2 mb-3">
                      <label htmlFor="">ปีงบ :</label>
                      <input
                        type="text"
                        name="year"
                        value={formik.values.year}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-8 mb-3">
                      <label htmlFor="">ชื่อโครงการ :</label>
                      <input
                        type="text"
                        name="project_name"
                        value={formik.values.project_name}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="">ตัวชี้วัด :</label>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <select
                          name="strategic_id"
                          value={formik.values.strategic_id}
                          onChange={(e) => {
                            setFilteredStrategies(strategies.filter(stg => stg.strategic_id === e.target.value));
                            formik.handleChange(e)
                          }}
                          className="form-control"
                        >
                          <option value="">-- เลือกยุทธศาสตร์ --</option>
                          {strategics && strategics.map(strategic => {
                            return (
                              <option key={strategic.id} value={strategic.id}>{strategic.strategic_name}</option>
                            );
                          })}
                        </select>
                        <select
                          name="strategy_id"
                          value={formik.values.strategy_id}
                          onChange={(e) => {
                            setFilteredKpis(kpis.filter(kpi => kpi.strategy_id === e.target.value));
                            formik.handleChange(e)
                          }}
                          className="form-control"
                        >
                          <option value="">-- เลือกกลยุทธ์ --</option>
                          {filteredStrategies && filteredStrategies.map(strategy => {
                            return (
                              <option key={strategy.id} value={strategy.id}>
                                {strategy.strategy_name}
                              </option>
                            );
                          })}
                        </select>
                        <select
                          name="kpi_id"
                          value={formik.values.kpi_id}
                          onChange={formik.handleChange}
                          className="form-control"
                        >
                          <option value="">-- เลือกตัวชี้วัด --</option>
                          {filteredKpis && filteredKpis.map(kpi => {
                            return (
                              <option key={kpi.id} value={kpi.id}>
                                {kpi.kpi_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="">ผู้รับผิดชอบโครงการ :</label>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <select
                          name="faction_id"
                          value={formik.values.faction_id}
                          onChange={(e) => {
                            setFilteredDeparts(departs.filter(dep => dep.faction_id === e.target.value));
                            formik.handleChange(e)
                          }}
                          className="form-control"
                        >
                          <option value="">-- เลือกกลุ่มภารกิจ --</option>
                          {factions && factions.map(faction => {
                            return (
                              <option key={faction.faction_id} value={faction.faction_id}>
                                {faction.faction_name}
                              </option>
                            );
                          })}
                        </select>
                        <select
                          name="depart_id"
                          value={formik.values.depart_id}
                          onChange={(e) => {
                            setFilteredPersons(persons.filter(person => person.member_of?.depart_id === e.target.value));
                            formik.handleChange(e)
                          }}
                          className="form-control"
                        >
                          <option value="">-- เลือกกลุ่มงาน --</option>
                          {filteredDeparts && filteredDeparts.map(depart => {
                            return (
                              <option key={depart.depart_id} value={depart.depart_id}>
                                {depart.depart_name}
                              </option>
                            );
                          })}
                        </select>
                        <select
                          name="person_id"
                          value={formik.values.person_id}
                          onChange={formik.handleChange}
                          className="form-control"
                        >
                          <option value="">-- เลือกผู้รับผิดชอบ --</option>
                          {filteredPersons && filteredPersons.map(person => {
                            return (
                              <option key={person.person_id} value={person.person_id}>
                                {`${person.person_firstname} ${person.person_lastname}`}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="">หมายเหตุ :</label>
                      <textarea
                        name="remark"
                        value={formik.values.remark}
                        onChange={formik.handleChange}
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="col-md-12 mb-3">
                      <button className="btn btn-primary float-end">
                        <i className="uil uil-save"></i>
                        บันทึก
                      </button>
                    </div>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default FormProject;
