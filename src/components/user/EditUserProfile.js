import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Papa from 'papaparse';


const EditUserProfile = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    mobile: '',
    experience: '',
    relevantExperience: '',
    highestQualification: '',
    skillSet: '',
    currentJobTitle: '',
    currentWorkLocation: '',
    city: '',
    zipCode: '',
    resumeUpload: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // Convert form data to CSV format
    const csvData = Papa.unparse([formData]);

    // Create a Blob from the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

     // Create a download link
     const link = document.createElement('a');
     if (link.download !== undefined) {
       const url = URL.createObjectURL(blob);
       link.setAttribute('href', url);
       link.setAttribute('download', 'user_data.csv');
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
     } else {
       console.error('Download feature not supported in this browser.');
     }
   
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleExportCSV = () => {
    // Convert form data to CSV format
    const csvData = Papa.unparse([formData]);

    // Create a Blob from the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    // Create a download link
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'user_data.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('Download feature not supported in this browser.');
    }
  };

  return (
    <Form onSubmit={handleFormSubmit} style={{ margin: '2rem' }}>
      <h4
        style={{
          textAlign: 'left',
          fontWeight: '600',
          
        }}
      >
        <span
          style={{
            textAlign: 'left',
            fontWeight: '600',
            textDecoration: 'underline',
            textDecorationColor: 'blue',
          }}
        >
          Update
        </span>
        <span style={{ textAlign: 'left', fontWeight: '600', color: 'blue', marginLeft: '8px' }}>
          Profile
        </span>
        <span>
          <PostAddIcon />
        </span>
      </h4>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="First Name" 
          style={{ width: '300px' }} 
          value={formData.firstName}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Last Name" 
          style={{ width: '300px' }}
          value={formData.lastName}
          onChange={handleInputChange}
           />
        </Form.Group>

        <Form.Group as={Col} controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Phone" 
          style={{ width: '300px' }} 
          value={formData.phone}
          onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          style={{ width: '300px' }} 
          value={formData.email}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Mobile" 
          style={{ width: '300px' }} 
          value={formData.mobile}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="experience">
          <Form.Label>Experience in Years</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Experience in Years" 
          style={{ width: '300px' }} 
          value={formData.experience}
          onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="relevantExperience">
          <Form.Label>Relevant Experience</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Relevant Experience" 
          style={{ width: '300px' }} 
          value={formData.relevantExperience}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="highestQualification">
          <Form.Label>Highest Qualification Held</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Highest Qualification Held" 
          style={{ width: '300px' }} 
          value={formData.highestQualification}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="skillSet">
          <Form.Label>Skill Set</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Skill Set" 
          style={{ width: '300px' }} 
          value={formData.skillSet}
          onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="currentJobTitle">
          <Form.Label>Current Job Title</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Current Job Title" 
          style={{ width: '300px' }} 
          value={formData.currentJobTitle}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="currentWorkLocation">
          <Form.Label>Current Work Location</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Current Work Location" 
          style={{ width: '300px' }} 
          value={formData.currentWorkLocation}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control 
          type="text"
          placeholder="City" 
          style={{ width: '300px' }} 
          value={formData.city}
          onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Zip Code" 
          style={{ width: '300px' }} 
          value={formData.zipCode}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="resumeUpload">
          <Form.Label>Resume Upload</Form.Label>
          <Form.Control 
          type="file" 
          style={{ width: '300px' }} 
          value={formData.resumeUpload}
          onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      {/* Other form fields remain unchanged */}

    

      <Row className="mb-2" >
        {/* Submit Button (left) */}
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <Button variant="primary" type="submit" style={{ width: '100%' , marginTop:'1rem'}}>
            Update
          </Button>
        </Col>

        {/* Export CSV Button (right) */}
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="text-end">
          <Button variant="success" onClick={handleExportCSV} style={{ width: '100%' , marginTop:'1rem'}}>
            Export CSV
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EditUserProfile;
