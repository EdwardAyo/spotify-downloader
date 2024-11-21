import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import queryString from 'query-string';

const Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { code } = queryString.parse(location.search);
        if (code) {
            exchangeCodeForToken(code);
        }
    }, [location]);

    const exchangeCodeForToken = async (code) => {
        try {
            const response = await axios.post("http://localhost:3001/api/token", {
                code,
            });
            const { access_token, refresh_token } = response.data;

            localStorage.setItem("spotify_access_token", access_token);
            localStorage.setItem("spotify_refresh_token", refresh_token);

            // Redirect to the main app
            navigate("/");
        } catch (error) {
            console.error("Error exchanging code for token:", error);
        }
    };

  return (
    <div>Processing Spotify login...</div>
  )
}

export default Callback