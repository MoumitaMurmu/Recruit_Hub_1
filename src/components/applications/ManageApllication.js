
import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import PostAddIcon from '@mui/icons-material/PostAdd';

const ManageApplication = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [dataSource, setDataSource] = useState([
    // Your hardcoded data
            {
              id: 1,
              jobPosition: 'Backend Developer',
              companyName: 'Elfonze',
              status: 'Accepted',
            },
            {
              id: 2,
              jobPosition: 'Frontend Developer',
              companyName: 'Amazon',
              status: 'Accepted',
            },
            {
              id: 3,
              jobPosition: 'Software Developer',
              companyName: 'Brizy Technologies',
              status: 'Rejected',
            },
            {
              id: 4,
              jobPosition: 'Nodejs Developer',
              companyName: 'Ganpat',
              status: 'Accepted',
            },


            {
                id: 5,
                jobPosition: 'Java Developer',
                companyName: 'Googletek',
                status: 'Rejected',
              },
              {
                id: 6,
                jobPosition: 'Frontend Engineer',
                companyName: 'Amazon',
                status: 'Accepted',
              },
              {
                id: 7,
                jobPosition: 'Backend Developer',
                companyName: 'Googletek',
                status: 'Accepted',
              },
              {
                id: 8,
                jobPosition: 'Software Developer',
                companyName: 'TCS',
                status: 'Rejected',
              },

              {
                id: 9,
                jobPosition: 'Backend Developer',
                companyName: 'Googletek',
                status: 'Accepted',
              },
              {
                id: 10,
                jobPosition: 'Frontend Developer',
                companyName: 'Amazon',
                status: 'Accepted',
              },
              {
                id: 11,
                jobPosition: 'Full Stack Developer',
                companyName: 'CrownStack',
                status: 'Rejected',
              },
              {
                id: 12,
                jobPosition: 'Java Developer',
                companyName: 'VivaTech',
                status: 'Accepted',
              },

              {
                id: 13,
                jobPosition: 'Web Development',
                companyName: 'Ganpat',
                status: 'Accepted',
              },
              {
                id: 14,
                jobPosition: 'MERN Stack Developer',
                companyName: 'Sunbase',
                status: 'Rejected',
              },

              {
                id: 15,
                jobPosition: 'React Developer',
                companyName: 'Wipro',
                status: 'Accepted',
              },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Fetch data or perform any other operations
    // For example, setDataSource(data) or any other data processing logic
  }, []); // Add dependencies if needed

  const columns = [
    {
        title: '#',
        dataIndex: 'id',
        key: 'id',
        render: (text, record, index) => ((page - 1) * pageSize) + index + 1,
      },
    {
      title: 'Job Position',
      dataIndex: 'jobPosition',
      key: 'jobPosition',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleResume(record.id)}>Resume</Button>
          &nbsp;
          <Button type="primary" onClick={() => handleToggleStatus(record.id)}>
            {record.status === 'Accepted' ? 'Reject' : 'Accept'}
          </Button>
        </Space>
      ),
      width: '30%',
    },
  ];

  const handleDelete = (id) => {
    // Implement your delete logic here
    console.log(`Delete application with ID: ${id}`);
  };

  const showModal = (record) => {
    // Implement your edit logic here
    console.log(`Edit application with ID: ${record.id}`);
    setModalVisible(true);
  };

  const handleResume = (id) => {
    // Implement your logic to view the resume
    console.log(`View resume for application with ID: ${id}`);
  };

  const handleToggleStatus = (id) => {
    // Implement your logic to toggle the application status (Accept/Reject)
    console.log(`Toggle status for application with ID: ${id}`);
  };

  const handleOk = () => {
    // Implement your modal OK logic here
    setModalVisible(false);
  };

  const handleCancel = () => {
    // Implement your modal Cancel logic here
    setModalVisible(false);
  };

  return (
    <div>
      <h4 style={{ textAlign: 'left', fontWeight: '600' }}>
        <span style={{ textAlign: 'left', fontWeight: '600', textDecoration: 'underline', textDecorationColor: 'blue' }}>
          Manage
        </span>
        <span style={{ textAlign: 'left', fontWeight: '600', color: 'blue', marginLeft: '8px' }}>Applications</span>
        <span>
          <PostAddIcon />
        </span>
      </h4>
      <Table
        dataSource={dataSource}
        columns={columns}
        style={{ width: '800px' }}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: dataSource.length,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />

      {/* Edit Modal */}
      <Modal title="Edit Application" visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* Your form elements for editing go here */}
        {/* For example, you can use Form from antd or any other form library */}
        {/* Don't forget to handle form submission logic */}
      </Modal>
    </div>
  );
};

export default ManageApplication;
