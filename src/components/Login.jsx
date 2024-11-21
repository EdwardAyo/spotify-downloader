import React from "react";

const Login = () => {
    const AUTH_URL = "https://accounts.spotify.com/authorize";
    const CLIENT_ID = "b1e1ae2f0d544b9da6d071fc4fc1bfb2";
    const REDIRECT_URI = "https://spotify-downloading.netlify.app/";
    const SCOPES = [
        "user-read-private",
        "user-read-email",
        "user-library-read",
        "user-top-read",
    ];

    const loginURL = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPES.join(" "))}`;

  return (
    <div>
        <a href={loginURL}><button>Login with Spotify</button></a>
    </div>
  )
 
}

export default Login