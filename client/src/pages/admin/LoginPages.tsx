// Info: Test login page

import React, { useEffect, useState } from "react";
import axios from "axios";

function LoginPages() {
  const [user, setUser] = useState<any>(null);

  const handleLogin = () => {
    const currentUrl = window.location.href; // Dapatkan URL halaman saat ini
    window.open(
      `http://localhost:3001/api/v1/auth/google?redirectUrl=${encodeURIComponent(currentUrl)}`,
      "_self"
    );
  };

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response: any = await axios.get(
          "http://localhost:3001/api/v1/auth/protected",
          { withCredentials: true }
        );
        setUser(response.data);
      } catch (error) {
        console.log("Not authenticated", error);
      }
    };
    fetchProtectedData(); // Tunggu hingga sesi siap
  }, []);

  return (
    <div className="App">
      {!user ? (
        <>
          <h2>Login with Google</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2>{user.message}</h2>
        </>
      )}
    </div>
  );
}

export default LoginPages;
