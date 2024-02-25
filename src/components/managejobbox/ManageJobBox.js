

import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import PostAddIcon from '@mui/icons-material/PostAdd';

const ManageJobBox = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      jobPosition: 'Backend Developer',
      companyName: 'Googletek',
      createdBy: 'Recruiter1',
    },
    {
      id: 2,
      jobPosition: 'Web Development',
      companyName: 'Ganpat',
      createdBy: 'Recruiter1',
    },

    {
      id: 3,
      jobPosition: 'Frontend Developer',
      companyName: 'Amazon',
      createdBy: 'Recruiter1',
    },
    {
      id: 4,
      jobPosition: 'Full Stack Developer',
      companyName: 'CrownStack',
      createdBy: 'Recruiter1',
    },
    {
      id: 5,
      jobPosition: 'Java Developer',
      companyName: 'VivaTech',
      createdBy: 'Recruiter1',
    },

    {
      id: 6,
      jobPosition: 'Frontend Engineer',
      companyName: 'Amazon',
      createdBy: 'Recruiter1',
    },
    {
      id: 7,
      jobPosition: 'Backend Developer',
      companyName: 'Googletek',
      createdBy: 'Recruiter1',
    },
    {
      id: 8,
      jobPosition: 'Software Developer',
      companyName: 'TCS',
      createdBy: 'Recruiter1',
    },

    {
      id: 9,
      jobPosition: 'Backend Developer',
      companyName: 'Googletek',
      createdBy: 'Recruiter1',
    },
    {
      id: 10,
      jobPosition: 'Frontend Developer',
      companyName: 'Amazon',
      createdBy: 'Recruiter1',
    }

  ]);
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
      key: 'position',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EyeOutlined />} onClick={() => handleView(record)} />
          &nbsp;
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          &nbsp;
          <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record)} />
        </Space>
      ),
      width: '20%',
    },
  ];

  const handleView = (record) => {
    // Implement your view logic here
    console.log(`View job with ID: ${record.id}`);
  };

  const handleEdit = (record) => {
    // Implement your edit logic here
    console.log(`Edit job with ID: ${record.id}`);
  };

  const handleDelete = (record) => {
    // Implement your delete logic here
    console.log(`Delete job with ID: ${record.id}`);
  };

  return (
    <div>
      <h4 style={{ textAlign: 'left', fontWeight: '600' }}>
        <span style={{ textAlign: 'left', fontWeight: '600', textDecoration: 'underline', textDecorationColor: 'blue' }}>
          Manage
        </span>
        <span style={{ textAlign: 'left', fontWeight: '600', color: 'blue', marginLeft: '8px' }}>Jobs</span>
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
    </div>
  );
};

export default ManageJobBox;

