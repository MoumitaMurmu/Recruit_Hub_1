import React, { useState } from 'react';
import Nav from '../components/Landing/Nav/Nav';
import { Button, Col, Form, FormControl, InputGroup, Row, Badge, Container } from 'react-bootstrap';
import JobCard from '../components/Card/JobCard';
import { Box } from '@mui/material';

const Jobs = () => {
  const [jobs, setJobs] = useState([
   {
    id: 1,
    position: 'Software Developer',
    companyName: 'Elfonze',
    jobLocation: 'Bangalore',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },

   {
    id: 2,
    position: 'Backend Developer',
    companyName: 'Googletek',
    jobLocation: 'Hyderabad',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },

   {
    id: 3,
    position: 'FrontEnd Developer',
    companyName: 'Crowstack',
    jobLocation: 'Delhi',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },
   {
    id: 1,
    position: 'Software Developer',
    companyName: 'Elfonze',
    jobLocation: 'Bangalore',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },

   {
    id: 2,
    position: 'Software Developer',
    companyName: 'Elfonze',
    jobLocation: 'Bangalore',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },

   {
    id: 3,
    position: 'Software Developer',
    companyName: 'Elfonze',
    jobLocation: 'Bangalore',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },
   {
    id: 1,
    position: 'Software Developer',
    companyName: 'Elfonze',
    jobLocation: 'Bangalore',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },

   {
    id: 2,
    position: 'Software Developer',
    companyName: 'Elfonze',
    jobLocation: 'Bangalore',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },

   {
    id: 3,
    position: 'Software Developer',
    companyName: 'Elfonze',
    jobLocation: 'Bangalore',
    jobType: 'Full-Time',
    jobStatus: 'Pending',
   },
  ]);

  const [filterStatus, setFilterStatus] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleFilterStatus = (status) => {
    setFilterStatus(status);
    // Implement filtering logic based on job status
    // Update the job list accordingly
  };

  const handleSortBy = (sortOption) => {
    setSortBy(sortOption);
    // Implement sorting logic based on the chosen option
    // Update the job list accordingly
  };

  const handleSearch = (query) => {
    // Implement search logic based on job title
    // Update the job list accordingly
  };

  // Apply filters to the job list
  const filteredJobs = jobs.filter((job) => {
    const statusFilterMatch = filterStatus === '' || job.status === filterStatus;
    return statusFilterMatch;
  });

  return (
    <>
      <Nav />
      <Container style={{
      padding:'5rem', 
      position: 'absolute', 
      right:'8rem', 
      top:'5rem'}}>
      <Box>
        <Row>
          {/* Filter Form - Job Status */}
          <Col xs={12} md={4} >
            <Form.Group controlId="filterStatus">
              <Form.Select onChange={(e) => handleFilterStatus(e.target.value)}>
                <option value="">Sort By Status</option>
                <option value="default">Default</option>

                <option value="O">Pending</option>
                <option value="I">Interview</option>
                <option value="U">Declined</option>
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Sort Form */}
          <Col xs={12} md={4} >
            <Form.Group controlId="sortBy">
              <Form.Select onChange={(e) => handleSortBy(e.target.value)}>
              <option  value="">Sort By Type</option>
               <option value="default">Default</option>
               <option value="default">Full-Time</option>
               <option value="default">Part-Time</option>
               <option value="default">Internship</option>

                {/* Add other sort options as needed */}
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Search Form */}
          <Col xs={12} md={4} >
            <InputGroup>
            <FormControl
                placeholder="Search By Job Title"
                aria-label="Search By Job Title"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button variant="primary">Search</Button>
            </InputGroup>
          </Col>
        </Row>
        </Box>
        {/* Job Cards */}
        {/* Job Cards */}
        <Box style={{marginTop: '4rem'}}> 
      <Row className="mb-3">
     { jobs.map((job) => (
        <Col key={job.id} xs={12} md={6} lg={4} className="mb-3">
          <JobCard job={job} />
        </Col>
      ))}
    </Row>
        {/* Pagination or page navigation if needed */}
        {/* ... */}
      </Box>
      </Container>
    </>
  );
};

export default Jobs;


