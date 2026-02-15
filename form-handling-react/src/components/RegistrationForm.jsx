import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setErrors('All fields are required');
            return;
        }
        setErrors('');
        console.log('Registered User:', { username, email, password });
        alert('User registered successfully!');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
            <h2>Registration Form (Controlled)</h2>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
