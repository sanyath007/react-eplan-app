import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import api from '../../api';

const FormKpi = () => {
  const [strategics, setStrategics] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [filteredStrategies, setFilteredStrategies] = useState([]);
  const [departs, setDeparts] = useState([]);
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

  const fetchInitForms = async () => {
    const res = await api.get(`/kpis/init/forms`);

    setStrategics(res.data.strategics);
    setStrategies(res.data.strategies);
    setDeparts(res.data.departs);
    setPersons(res.data.persons);
    setFilteredPersons(res.data.persons);
  };

  useEffect(() => {
    fetchInitForms();
  }, []);

  const handleSubmit = (values, props) => {
    console.log(values, props);
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>เพิ่มตัวชี้วัด</h3>
          </div>

          <Formik
            initialValues={{
              kpi_no: '',
              kpi_name: '',
              strategic_id: '',
              strategy_id: '',
              year: '',
              owner_depart: '',
              owner_person: '',
              remark: ''
            }}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="">ตัวชี้วัดที่ :</label>
                      <input
                        type="number"
                        name="kpi_no"
                        value={formik.values.kpi_no}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="">ชื่อตัวชี้วัด :</label>
                      <input
                        type="text"
                        name="kpi_name"
                        value={formik.values.kpi_name}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="">ยุทธศาสตร์ที่ :</label>
                      <select
                        className="form-control"
                        name="strategic_id"
                        value={formik.values.strategic_id}
                        onChange={(e) => {
                          setFilteredStrategies(strategies.map(stg => stg.strategic_id === e.target.value));
                          formik.handleChange(e);
                        }}
                      >
                        <option value="">-- เลือกยุทธศาสตร์ --</option>
                        {strategics && strategics.map(strategic => {
                          return (
                            <option key={strategic.id} value={strategic.id}>
                              {strategic.strategic_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="">กลยุทธ์ที่ :</label>
                      <select
                        name="strategy_id"
                        value={formik.values.strategy_id}
                        onChange={formik.handleChange}
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
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="">ปีงบประมาณ :</label>
                      <input
                        type="text"
                        name="year"
                        value={formik.values.year}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="">หน่วยงานผู้รับผิดชอบ :</label>
                      <select
                        name="owner_depart"
                        value={formik.values.owner_depart}
                        onChange={(e) => {
                          setFilteredPersons(persons.filter(p => p.member_of?.depart_id === e.target.value));
                          formik.handleChange(e);
                        }}
                        className="form-control"
                      >
                        <option value="">-- เลือกหน่วยงานผู้รับผิดชอบ --</option>
                        {departs && departs.map(depart => {
                          return (
                            <option key={depart.depart_id} value={depart.depart_id}>
                              {depart.depart_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="">ผู้รับผิดชอบ :</label>
                      <select
                        name="owner_person"
                        value={formik.values.owner_person}
                        onChange={formik.handleChange}
                        className="form-control"
                      >
                        <option value="">-- เลือกผู้รับผิดชอบ --</option>
                        {filteredPersons && filteredPersons.map(person => {
                          return (
                            <option key={person.person_id} value={person.person_id}>
                              {`${person.prefix?.prefix_name}${person.person_firstname} ${person.person_lastname}`}
                            </option>
                          );
                        })}
                      </select>
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
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default FormKpi