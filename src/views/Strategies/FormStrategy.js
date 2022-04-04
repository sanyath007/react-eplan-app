import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import api from '../../api';

const FormStrategy = () => {
  const [strategics, setStrategics] = useState([]);

  const handleSubmit = async (values, props) => {
    console.log(values, props);
    const res = await api.post('/strategies', values);
    console.log(res);
  };

  const fetchStrategics = async () => {
    const res = await api.get(`/strategies/init/forms`);

    setStrategics(res.data.strategics);
  };

  useEffect(() => {
    fetchStrategics();
  }, []);

  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>เพิ่มกลยุทธ์</h3>
          </div>

          <Formik
            initialValues={{
              strategy_no: '',
              strategy_name: '',
              strategic_id: '',
              year: '',
              kpi_number: '',
              remark: ''
            }}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="">ยุทธศาสตร์ :</label>
                      <select
                        name="strategic_id"
                        value={formik.values.strategic_id}
                        onChange={formik.handleChange}
                        className="form-control"
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
                      <input
                        type="number"
                        name="strategy_no"
                        value={formik.values.strategy_no}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="">ชื่อกลยุทธ์ :</label>
                      <input
                        type="text"
                        name="strategy_name"
                        value={formik.values.strategy_name}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
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
                      <label htmlFor="">จำนวนตัวชี้วัด :</label>
                      <input
                        type="text"
                        name="kpi_number"
                        value={formik.values.kpi_number}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
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

export default FormStrategy;
