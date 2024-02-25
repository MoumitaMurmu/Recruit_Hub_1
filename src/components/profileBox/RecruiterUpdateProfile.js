
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import PostAddIcon from '@mui/icons-material/PostAdd';



const RecruiterUpdateProfile  = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <Form onSubmit={handleFormSubmit} style={{ marginTop: '2rem' }}>
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
      <Row className="mb-3">
        {/* Existing form fields remain unchanged */}
        
        <Form.Group as={Col} controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" style={{ width: '300px' }} />
        </Form.Group>

        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{ width: '300px' }} />
        </Form.Group>

        <Form.Group as={Col} controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Mobile" style={{ width: '300px' }} />
        </Form.Group>

        


        <Form.Group as={Col} controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Select Gender">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="experience">
          <Form.Label>Experience in Years</Form.Label>
          <Form.Control type="text" placeholder="Experience in Years" style={{ width: '300px' }} />
        </Form.Group>

        <Form.Group as={Col} controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Role" style={{ width: '300px' }} />
        </Form.Group>

        <Form.Group as={Col} controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" style={{ width: '300px' }} />
        </Form.Group>

        <Form.Group as={Col} controlId="currentJobTitle">
          <Form.Label>Current Job Title</Form.Label>
          <Form.Control type="text" placeholder="Current Job Title" style={{ width: '300px' }} />
        </Form.Group>
      </Row>

      {/* Other form fields remain unchanged */}

      <Button variant="primary" type="submit" className="job-box-btn">
        Update
      </Button>
    </Form>
  );
};

export default RecruiterUpdateProfile ;
      


        
     
