import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { PersonOutlineOutlined as Profile, AddchartOutlined as AddJob, ManageAccountsOutlined as ManageJob,  BusinessCenterOutlined as Applications } from '@mui/icons-material';

// Define the navigation items with their respective icons and routes
const navList = [
    { id: 1, name: 'Profile', icon: <Profile />, route: '/dashboard' },
    { id: 2, name: 'Add Job', icon: <AddJob />, route: '/dashboard/add-jobs' },
    { id: 3, name: 'Manage Jobs', icon: <ManageJob />, route: '/dashboard/manage-jobs' },
    { id: 4, name: 'Applications', icon: <Applications/>, route: '/dashboard/my-jobs' },

];

const NavList = () => {
    return (
        // Render the list of navigation items
        <List className='nav-list'>
            {navList.map((item) => (
                <ListItem button key={item.id} className='nav-item'>
                    {/* Use React Router's Link component for navigation */}
                    <Link to={item.route} style={{ textDecoration: 'none', display: 'flex', color:'black'}}>
                        <ListItemIcon style={{ alignItems: 'center'}} className='nav-icon'>
                            {/* Render the corresponding icon for each navigation item */}
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} style={{fontFamily :'sans-serif', fontSize:'18px', fontWeight:'bolder'}}/>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};

export default NavList;


// import React from 'react';
// import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { PersonOutlineOutlined as Profile, AddchartOutlined as AddJob, ManageAccountsOutlined as ManageJob, BusinessCenterOutlined as Applications, EqualizerOutlined as Stats, SupervisorAccountOutlined as AdminIcon, GroupOutlined as ManageUsers, PersonOutlined as UserIcon } from '@mui/icons-material';

// const NavList = ({ userType }) => {
//     let navList;

//     // Determine the navigation items based on the user type
//     if (userType === 'recruiter') {
//         navList = [
//             { id: 1, name: 'Profile', icon: <Profile />, route: '/dashboard' },
//             { id: 2, name: 'Add Job', icon: <AddJob />, route: '/dashboard/add-jobs' },
//             { id: 3, name: 'Manage Jobs', icon: <ManageJob />, route: '/dashboard/manage-jobs' },
//             { id: 4, name: 'Applications', icon: <Applications/>, route: '/dashboard/my-jobs' },
//         ];
//     } else if (userType === 'admin') {
//         navList = [
//             { id: 1, name: 'Profile', icon: <Profile />, route: '/admin/dashboard' },
//             { id: 2, name: 'Stats', icon: <Stats />, route: '/admin/stats' },
//             { id: 3, name: 'Admin', icon: <AdminIcon />, route: '/admin/admin-panel' },
//             { id: 4, name: 'Manage Users', icon: <ManageUsers />, route: '/admin/manage-users' },
//         ];
//     } else if (userType === 'user') {
//         navList = [
//             { id: 1, name: 'Profile', icon: <Profile />, route: '/user/dashboard' },
//             { id: 2, name: 'User', icon: <UserIcon />, route: '/user/profile' },
//             // Add other user-specific navigation items as needed
//         ];
//     }

//     return (
//         <List className='nav-list'>
//             {navList.map((item) => (
//                 <ListItem button key={item.id} className='nav-item'>
//                     <Link to={item.route} style={{ textDecoration: 'none', display: 'flex', color:'black'}}>
//                         <ListItemIcon style={{ alignItems: 'center'}} className='nav-icon'>
//                             {item.icon}
//                         </ListItemIcon>
//                         <ListItemText primary={item.name} style={{fontFamily :'sans-serif', fontSize:'18px', fontWeight:'bolder'}}/>
//                     </Link>
//                 </ListItem>
//             ))}
//         </List>
//     );
// };

// export default NavList;
