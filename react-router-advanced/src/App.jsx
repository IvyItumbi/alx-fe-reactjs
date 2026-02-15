import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('authToken', 'true');
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('authToken', 'false');
    };

    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                    <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
                    <Link to="/blog/1" style={{ marginRight: '10px' }}>Blog Post 1</Link>
                    <Link to="/blog/2" style={{ marginRight: '10px' }}>Blog Post 2</Link>

                    <button onClick={isAuthenticated ? logout : login} style={{ marginLeft: '20px' }}>
                        {isAuthenticated ? 'Logout' : 'Login'}
                    </button>
                </nav>

                <Routes>
                    <Route path="/" element={<h2>Home Page</h2>} />

                    <Route
                        path="/profile/*"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/blog/:id" element={<BlogPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
