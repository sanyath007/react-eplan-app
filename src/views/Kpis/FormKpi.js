import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import api from '../../api';

const FormKpi = () => {
  const [strategics, setStrategics] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [filteredStrategies, setFilteredStrategies] = useState([]);
  const [factions, setFactions] = useState([]);
  const [departs, setDeparts] = useState([]);
  const [filteredDeparts, setFilteredDeparts] = useState([]);
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [selectedFaction, setSelectedFaction] = useState('');

  const fetchInitForms = async () => {
    const res = await api.get(`/kpis/init/forms`);

    setStrategics(res.data.strategics);
    setStrategies(res.data.strategies);
    setFilteredStrategies(res.data.strategies);
    setFactions(res.data.factions);
    setDeparts(res.data.departs);
    setFilteredDeparts(res.data.departs);
    setPersons(res.data.persons);
    setFilteredPersons(res.data.persons);
  };

  const handleSubmit = async (values, props) => {
    console.log(values, props);
    const res = await api.post('/kpis', values);
    console.log(res);
  };

  useEffect(() => {
    fetchInitForms();
  }, []);

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
                          setFilteredStrategies(strategies.filter(stg => stg.strategic_id === e.target.value));
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
                    <div className="col-md-12 mb-3">
                      <label htmlFor="">เลือกหน่วยงานผู้รับผิดชอบ :</label>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <select
                          name="selectedFaction"
                          value={selectedFaction}
                          onChange={(e) => {
                            setFilteredDeparts(departs.filter(dep => dep.faction_id === e.target.value));
                            setSelectedFaction(e.target.value);
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
                          name="owner_depart"
                          value={formik.values.owner_depart}
                          onChange={(e) => {
                            setFilteredPersons(persons.filter(p => p.member_of?.depart_id === e.target.value));
                            formik.handleChange(e);
                          }}
                          className="form-control"
                        >
                          <option value="">-- เลือกหน่วยงานผู้รับผิดชอบ --</option>
                          {filteredDeparts && filteredDeparts.map(depart => {
                            return (
                              <option key={depart.depart_id} value={depart.depart_id}>
                                {depart.depart_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
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