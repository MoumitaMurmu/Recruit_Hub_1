import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Legend, AreaChart, XAxis, YAxis, CartesianGrid, Area } from 'recharts';

const Stats = ({ users, jobs }) => {
  const [overallStats, setOverallStats] = useState([
    { name: 'Pending', value: 3, fill: '#FF6384' },
    { name: 'Interview', value: 4, fill: '#36A2EB' },
    { name: 'Declined', value: 2, fill: '#FFCE56' },
  ]);

  const [jobStats, setJobStats] = useState([
    { name: 'Pending', value: 3, fill: '#25ff19' },
    { name: 'Interview', value: 4, fill: '#cf2c2d' },
    { name: 'Declined', value: 2, fill: '#c1c7d0' },
  ]);

  useEffect(() => {
    // Update statistics based on actual data if available (users and jobs arrays)
    if (users && jobs) {
      // Calculate Overall Statistics
      const pendingCount = users.filter(user => user.status === 'Pending').length;
      const interviewCount = users.filter(user => user.status === 'Interview').length;
      const declinedCount = users.filter(user => user.status === 'Declined').length;

      setOverallStats([
        { name: 'Pending', value: pendingCount, fill: '#FF6384' },
        { name: 'Interview', value: interviewCount, fill: '#36A2EB' },
        { name: 'Declined', value: declinedCount, fill: '#FFCE56' },
      ]);

      // Calculate Job Statistics
      const totalJobs = jobs.length;
      const pendingJobs = jobs.filter(job => job.status === 'Pending').length;
      const interviewJobs = jobs.filter(job => job.status === 'Interview').length;
      const declinedJobs = jobs.filter(job => job.status === 'Declined').length;

      setJobStats([
        { name: 'Pending', value: pendingJobs, fill: '#25ff19' },
        { name: 'Interview', value: interviewJobs, fill: '#cf2c2d' },
        { name: 'Declined', value: declinedJobs, fill: '#c1c7d0' },
      ]);
    }
  }, [users, jobs]);

  return (
    <div style={{marginTop:'5rem', width:'1000px'}}>
      <h3 style={{fontWeight:'600'}}>Overall Statistics</h3>
      <PieChart width={300} height={300} style={{ marginLeft:'20rem'}}>
        <Pie data={overallStats} dataKey="value" nameKey="name" fill="#8884d8" label />
        <Tooltip />
        <Legend />
      </PieChart>

      <h3 style={{fontWeight:'600'}}>Job Statistics</h3>
      <AreaChart width={1000} height={220} data={jobStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Stats;
