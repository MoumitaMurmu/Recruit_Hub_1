import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './admin.css';
const Admin = () => {
  return (
    <Container className="mt-4 card-container">
      {/* User Info Cards */}
      <h2 style={{color:'rgb(55 65 81)', fontWeight:'600'}}>User Info</h2>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body className="user-info-card" style={{
                backgroundImage: 'linear-gradient(to left, #993d2b, #9a3c33, #9b3b3a, #9b3b41, #9b3b48)'
            }}>
            <Card.Text className="card-text">87</Card.Text>

              <Card.Title className="card-title" >Total Members</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="user-info-card"  
            style={{
                backgroundImage: 'linear-gradient(to left, #a4d0ca, #8addc8, #74e8bd, #6cf1a8, #73f98b)'
                }}>
            <Card.Text className="card-text">5</Card.Text>

              <Card.Title className="card-title">Admins</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="user-info-card"
            style={{
                backgroundImage: 'linear-gradient(to right top, #d16ba5, #ee7387, #f78969, #eba654, #cfc456, #b8d468, #9de282, #7eeea3, #70f2b8, #64f6cd, #5ef9e0, #5ffbf1)'
            }}
            >
            <Card.Text className="card-text">2</Card.Text>

              <Card.Title  className="card-title">Recruiters</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="user-info-card"
            style={{
                backgroundImage: 'linear-gradient(to left, #5fff56, #7afc4c, #8ff943, #a1f53b, #b1f234)'
            }}
            >
            <Card.Text className="card-text">80</Card.Text>

              <Card.Title  className="card-title">Applicants</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Job Info Cards */}
      <h2 style={{color:'rgb(55 65 81)', fontWeight:'600'}}>Job Info</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body className="job-info-card"
            style={{
                backgroundImage: 'linear-gradient(to left, #3c4385, #344c8c, #2c5591, #255d96, #206599)'
            }}
            >
            <Card.Text className="card-text">6</Card.Text>

              <Card.Title className="card-title">Total Jobs</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="job-info-card"
            style={{
                backgroundImage: 'linear-gradient(to left, #25ff19, #67fd29, #8afa39, #a4f848, #b9f558)'
            }}
            >
            <Card.Text className="card-text">4</Card.Text>

              <Card.Title className="card-title">Pending</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="job-info-card"
            style={{
                backgroundImage: 'linear-gradient(to left, #cf2c2d, #c45f1f, #b6812b, #a89b4c, #9fb175)'
            }}
            >
            <Card.Text className="card-text">2</Card.Text>

              <Card.Title className="card-title">Interview</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="job-info-card"
            style={{
                backgroundImage: 'linear-gradient(to left, #c1c7d0, #a5c4d0, #8ac2bf, #88bd9d, #9fb175)'
            }}
            >
            <Card.Text className="card-text">0</Card.Text>

              <Card.Title className="card-title">Declined</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
