import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from '../views/Dashboard';
import StrategicView from '../views/Strategics';
import GoalView from '../views/Goals';
import StrategyView from '../views/Strategies';
import FormStrategy from '../views/Strategies/FormStrategy';
import KpiView from '../views/Kpis';
import KpiDetailView from '../views/Kpis/DetailView';
import FormKpi from '../views/Kpis/FormKpi';
import ProjectView from '../views/Projects';
import ProjectDetailView from '../views/Projects/DetailView';
import FormProject from '../views/Projects/FormProject';
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
              <Route path='goals' element={<GoalView />} />
              <Route path='strategies' element={<StrategyView />} />
              <Route path='strategies/add' element={<FormStrategy />} />
              <Route path='kpis' element={<KpiView />} />
              <Route path='kpis/add' element={<FormKpi />} />
              <Route path='kpis/:id' element={<KpiDetailView />} />
              <Route path='projects' element={<ProjectView />} />
              <Route path='projects/:id' element={<ProjectDetailView />} />
              <Route path='projects/add' element={<FormProject />} />
            </Routes>
          </div>
        </main>

      <Footer />
    </div>
  )
}

export default DefaultLayout