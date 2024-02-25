

import React, { useState } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import PostAddIcon from '@mui/icons-material/PostAdd';

const ManageUsers = () => {
  const itemsPerPage = 5; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);

  const [users, setUsers] = useState([
    { id: 1, username: 'Mamun', email: 'Help.Yourassistant@Gmail.Com', role: 'Recruiter' },
    { id: 2, username: 'User1', email: 'User1@Gmail.Com', role: 'Admin' },
    { id: 3, username: 'Recruiter1', email: 'Recruiter1@Gmail.Com', role: 'Recruiter' },
    { id: 4, username: 'Pawan', email: 'Pm752000@Gmail.Com', role: 'User' },
    { id: 5, username: 'Manali', email: 'Dhananim76@Gmail.Com', role: 'User' },
    { id: 6, username: 'Amin', email: 'Khouyaamin17@Gmail.Com', role: 'User' },
    { id: 7, username: 'Recruiter1', email: 'Recruiter1@Gmail.Com', role: 'Recruiter' },
    { id: 8, username: 'Pawan', email: 'Pm752000@Gmail.Com', role: 'User' },
    { id: 9, username: 'Manali', email: 'Dhananim76@Gmail.Com', role: 'User' },
    { id: 10, username: 'Amin', email: 'Khouyaamin17@Gmail.Com', role: 'User' },
    { id: 11, username: 'Recruiter1', email: 'Recruiter1@Gmail.Com', role: 'Recruiter' },
    { id: 12, username: 'Pawan', email: 'Pm752000@Gmail.Com', role: 'User' },
    { id: 13, username: 'Manali', email: 'Dhananim76@Gmail.Com', role: 'User' },
    { id: 14, username: 'Amin', email: 'Khouyaamin17@Gmail.Com', role: 'User' },
    { id: 15, username: 'Recruiter1', email: 'Recruiter1@Gmail.Com', role: 'Recruiter' },
    { id: 16, username: 'Pawan', email: 'Pm752000@Gmail.Com', role: 'User' },
    { id: 17, username: 'Manali', email: 'Dhananim76@Gmail.Com', role: 'User' },
    { id: 18, username: 'Amin', email: 'Khouyaamin17@Gmail.Com', role: 'User' },
    { id: 19, username: 'Manali', email: 'Dhananim76@Gmail.Com', role: 'User' },
    { id: 20, username: 'Amin', email: 'Khouyaamin17@Gmail.Com', role: 'User' },
    // ... add more users as needed
  ]);

  const handleRoleChange = (userId, newRole) => {
    // Update the user's role in the state
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  // Calculate pagination values
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '1000px' }}>
      <div>
        <h4 style={{ textAlign: 'left', fontWeight: '600' }}>
          <span style={{ textAlign: 'left', fontWeight: '600', textDecoration: 'underline', textDecorationColor: 'blue' }}>
            Manage
          </span>
          <span style={{ textAlign: 'left', fontWeight: '600', color: 'blue', marginLeft: '8px' }}>Users</span>
          <span><PostAddIcon /></span>
        </h4>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>#</th>
              <th style={{ backgroundColor: 'blue', color: 'white', textAlign: 'left' }}>Username</th>
              <th style={{ backgroundColor: 'blue', color: 'white', textAlign: 'left' }}>Email</th>
              <th style={{ backgroundColor: 'blue', color: 'white', textAlign: 'left' }}>Role</th>
              <th style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center', width: '280px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td style={{ textAlign: 'center' }}>{user.id}</td>
                <td style={{ textAlign: 'left' }}>{user.username}</td>
                <td style={{ textAlign: 'left' }}>{user.email}</td>
                <td style={{ textAlign: 'left' }}>{user.role}</td>
                <td>
                  {user.role === 'Admin' && (
                    <>
                     
                    </>
                  )}

                  {user.role === 'Recruiter' && (
                    <>
                      <Button
                        variant="info"
                        onClick={() => handleRoleChange(user.id, 'Admin')}
                      >
                        Make Admin
                      </Button>{' '}
                      <Button
                        variant="success"
                        onClick={() => handleRoleChange(user.id, 'User')}
                      >
                        Make User
                      </Button>
                    </>
                  )}

                  {user.role === 'User' && (
                    <>
                      <Button
                        variant="info"
                        onClick={() => handleRoleChange(user.id, 'Admin')}
                      >
                        Make Admin
                      </Button>{' '}
                      <Button
                        variant="success"
                        onClick={() => handleRoleChange(user.id, 'Recruiter')}
                      >
                        Make Recruiter
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          {[...Array(Math.ceil(users.length / itemsPerPage)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default ManageUsers;

