import { useState, useEffect } from 'react';

// Mock hook
export const useAuth = () => {
    // Simulate auth state
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // For demo, we might want a login/logout toggle
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return { isAuthenticated, login, logout };
};
