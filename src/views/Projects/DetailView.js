import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import api from '../../api';

const DetailView = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const fetchProject = async (_id) => {
    const res = await api.get(`/projects/${_id}`);

    console.log(res);
    setProject(res.data);
  };

  useEffect(() => {
    fetchProject(id);
  }, []);

  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>โครงการ {`${project?.id} - ${project?.project_name}`}</h3>
          </div>

          <div style={{ height: '240px' }}>
            <p>รายละเอียดโครงการ</p>
          </div>

          <Tabs defaultActiveKey="1">
            <Tab
              eventKey={1}
              title="วัสดุ/ครุภัณฑ์"
              style={{
                borderLeft: '1px solid #dee2e6',
                borderRight: '1px solid #dee2e6',
                borderBottom: '1px solid #dee2e6',
                padding: '10px'
              }}
            >
              {project?.plan_assets.length > 0 && (
                <ul>
                  {project?.plan_assets.map(asset => {
                    return (
                      <li key={asset.id}>
                        {asset.desc} จำนวน {asset.amount} {asset.unit?.name} ({asset.depart?.depart_name})
                      </li>
                    );
                  })}
                </ul>
              )}
            </Tab>
            <Tab
              eventKey={2}
              title="งบอบรม"
              style={{
                borderLeft: '1px solid #dee2e6',
                borderRight: '1px solid #dee2e6',
                borderBottom: '1px solid #dee2e6',
                padding: '10px'
              }}
            >
              งบอบรม
            </Tab>
            <Tab
              eventKey={3}
              title="จ้างเหมาบริการ"
              style={{
                borderLeft: '1px solid #dee2e6',
                borderRight: '1px solid #dee2e6',
                borderBottom: '1px solid #dee2e6',
                padding: '10px'
              }}
            >
              จ้างเหมาบริการ
            </Tab>
            <Tab
              eventKey={4}
              title="ก่อสร้าง/ซ่อมแซม"
              style={{
                borderLeft: '1px solid #dee2e6',
                borderRight: '1px solid #dee2e6',
                borderBottom: '1px solid #dee2e6',
                padding: '10px'
              }}
            >
              ก่อสร้าง/ซ่อมแซม
            </Tab>
          </Tabs>

        </div>
      </div>
    </div>
  )
}

export default DetailView;
