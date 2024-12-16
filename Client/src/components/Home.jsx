import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Home.css';

const Home = () => {
    const navigate = useNavigate(); // Hook to handle navigation

    return (
        <>
            <div className="home-container">
                <p>WELCOME TO GAIL PVT. INDIA LIMITED</p>
                <div className="button-container">
                    {/* Login Button */}
                    <button 
                        className="home-button" 
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>

                    {/* Register Button */}
                    <button 
                        className="home-button" 
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
