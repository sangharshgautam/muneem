import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import UnAuthenticated from "./components/UnAuthenticated";
import ProtectedRoute from "./ProtectedRoute";
import GoogleApi from "./services/GoogleApi";

function App() {
    const [user, setUser] = useState<any | null>(null);
    const [profile, setProfile] = useState<any | null>(null);

    useEffect(
        () => {
            if (user) {
                GoogleApi.getUserInfo()
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
              <Route path="/" element={<h1>Moneta</h1>} />
              <Route path="/moneta" element={<Outlet/>}>
                  <Route index element={<UnAuthenticated user={user} setUser={setUser}/>} />
                  <Route path="secure/*" element={<ProtectedRoute user={user} profile={profile} setProfile={setProfile}/>} />
              </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
