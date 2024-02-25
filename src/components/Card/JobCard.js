import React from 'react';
import { Card, Button } from 'react-bootstrap';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

const JobCard = ({ job }) => {
  return (
    <Card style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}>
      <Card.Body>
        <Card.Title style={{textAlign:'left',  paddingBottom:'0.5rem'}}>
        <AcUnitOutlinedIcon style={{fontSize:'40px', background:'yellow', margin:'10px'}}/>
         {job.position}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          < BusinessOutlinedIcon  style={{ marginRight: '0.5rem' }} />
          {job.companyName}
        </Card.Subtitle>
        <Card.Text>
          < RoomOutlinedIcon style={{ marginRight: '0.5rem' }} />
          {job.jobLocation}
        </Card.Text>
        <Card.Text>
          <strong>
            <BusinessCenterOutlinedIcon style={{ marginRight: '0.5rem' }} />
           
          </strong>{' '}
          {job.jobType}
        </Card.Text>
        <Card.Text>
          <strong>
            <AdsClickOutlinedIcon style={{ marginRight: '0.5rem' }} />
            
          </strong>{' '}
          {job.jobStatus}
        </Card.Text>

        <Button variant="primary" style={{ marginRight: '0.5rem' }}>
          Details
        </Button>
        <Button variant="success">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;

