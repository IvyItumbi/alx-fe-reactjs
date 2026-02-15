import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Using the hook here implies we need a Context or just simulation. 
    // For simplicity in this protected route, we'll assume the hook returns the *current* state.
    // HOWEVER, since useAuth defined above uses localized state, calling it here creates NEW state (false by default).

    // To make this work for demo, we should probably simulate auth with localStorage or a global variable, 
    // or accept isAuthenticated as prop.

    // Let's rely on a simulated check for now, or use a Context if we were building a full app.
    // But task says "Use a simple authentication check to simulate user login status."

    // Better approach for the generic checker:
    const isAuth = localStorage.getItem('authToken') === 'true';

    if (!isAuth) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
