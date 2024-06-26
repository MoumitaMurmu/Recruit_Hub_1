import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataProvider from '../context/DataProvider';

import { Box } from '@mui/material';
import SwipeDrawer from './SwipeDrawer';

import ProfileBox from './profileBox/ProfileBox';
import AddJobBox from './addjobbox/AddJobBox';
import ManageJobBox from './managejobbox/ManageJobBox';
import Landing from '../pages/Landing';
import Jobs from '../pages/Jobs';
import Login from './Form/Login/Login';
import Register from './Form/Register/Register';
import EditUserProfile from './user/EditUserProfile';
import ManageApplication from './applications/ManageApllication';
import Admin from './admin/Admin';
import ManageUsers from './admin/manageusers/ManageUsers';
import Stats from './admin/stats/Stats';
import RecruiterUpdateProfile from './profileBox/RecruiterUpdateProfile';


const Home = () => {
  return (
    // Wrap the entire application with the DataProvider to provide context
    <DataProvider>
      {/* Use Box for flexible layout */}
      <Box style={{ display: 'flex', width: '100%' }}>
        {/* Set up routing using React Router */}
        <Router>
          {/* Include the SwipeDrawer component outside the Routes for consistent navigation */}
       
       
        
          {/* Define the routes for different sections of the app */}
          <Routes>
            
            {/* Route for the main landing section */}
          <Route path="/" element={<Landing />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/jobs" element={<Jobs />}/>

          {/* <Route path='/footer' element={<Footer/>}/> */}
         
         
         
           
              {/* Route for the main profile  section */}
           <Route path='/dashboard' element={<SwipeDrawer/>}>
           {/* <Route path="/dashboard/" element={<add-jobs/>} /> */}
           <Route index element={<ProfileBox />} />

           <Route path="/dashboard/edit-profile" element={<EditUserProfile />}/>
           {/* <Route path="/dashboard/edit-profile" element={<RecruiterUpdateProfile/>}/> */}


          {/* Route for the add jobs section */}
           <Route path="/dashboard/add-jobs" element={<AddJobBox />} />

          {/* Route for the DeleteNotes section */}
           <Route path="/dashboard/manage-jobs" element={<ManageJobBox />} />
          
           {/* <Route path="/dashboard/stats" element={<Stats />} /> */}

           <Route path="/dashboard/my-jobs" element={<ManageApplication />} />
           <Route path="/dashboard/admin" element={<Admin />} />
           {/* <Route path="/dashboard/manage-users" element={<ManageUsers />} /> */}



           </Route>
          </Routes>
        </Router>
      </Box>
    </DataProvider>
  );
}

export default Home;