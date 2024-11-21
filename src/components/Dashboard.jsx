import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const accessToken = localStorage.getItem("spotify_access_token");

    useEffect(() => {
        if (accessToken) {
            fetchUserData();
        }
    }, [accessToken]);

    const fetchUserData = async () => {
        try {
            const response = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer $(accessToken)`,
                },
            });
            setUserData(response.data);
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };


  return (
    <div>
        {userData ? (
            <div>
                <h1>Welcome, {userData.display_name}!</h1>
                <p>Email: {userData.email}</p>
                <img src={userData.images[0]?.url} alt='User Avatar' />
            </div>
        ) : (
            <p>Loading user data...</p>
        )}
    </div>
  )
}

export default Dashboard