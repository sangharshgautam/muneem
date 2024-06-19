import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import UnAuthenticated from "./components/UnAuthenticated";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";

function App() {
    const [user, setUser] = useState<any | null>(null);
    const [profile, setProfile] = useState<any | null>(null);

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res: any) => {
                        setProfile(res.data);
                    })
                    .catch((err: any) => console.log(err));
            }
        },
        [ user ]
    );
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<h1>Muneem</h1>} />
              <Route path="/muneem" element={<Outlet/>}>
                  <Route index element={<UnAuthenticated user={user} setUser={setUser}/>} />
                  <Route path="secure/*" element={<ProtectedRoute user={user} profile={profile} setProfile={setProfile}/>} />
              </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
