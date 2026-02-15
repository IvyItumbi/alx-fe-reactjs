import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h2>Profile Page</h2>
            <nav>
                <ul style={{ display: 'flex', gap: '20px' }}>
                    <li><Link to="details">Profile Details</Link></li>
                    <li><Link to="settings">Profile Settings</Link></li>
                </ul>
            </nav>

            {/* Nested Routes rendering here */}
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9' }}>
                <Routes>
                    <Route path="details" element={<ProfileDetails />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Routes>
                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
