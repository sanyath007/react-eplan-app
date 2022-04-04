import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from '../views/Dashboard';
import StrategicView from '../views/Strategics';
import StrategyView from '../views/Strategies';
import KpiView from '../views/Kpis';
import FormKpi from '../views/Kpis/FormKpi';
import ProjectView from '../views/Projects';
import Sidebar from './Sidebar';

const DefaultLayout = () => {
  return (
    <div className="app">
      <Navbar />

        <main>
          <div className="content-wrapper">
            <Sidebar />

            <Routes>
              <Route path='' element={<Dashboard />} />
              <Route path='strategics' element={<StrategicView />} />
              <Route path='strategies' element={<StrategyView />} />
              <Route path='kpis' element={<KpiView />} />
              <Route path='kpis/add' element={<FormKpi />} />
              <Route path='projects' element={<ProjectView />} />
            </Routes>
          </div>
        </main>

      <Footer />
    </div>
  )
}

export default DefaultLayout