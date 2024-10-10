import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate, Link} from "react-router-dom";

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    <Link to="/post/:id">Post Detail</Link>
                </li>
                <li>
                    <Link to="/post/new">Post New</Link>
                </li>
                <li>
                    <Link to="/post/edit/:id">Post Edit</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>}/>
                <Route path="/post" element={<h1>POST LIST PAGE</h1>}/>
                <Route path="/post/:id" element={<h1>POST DETAIL PAGE</h1>}/>
                <Route path="/post/new" element={<h1>POST NEW PAGE</h1>}/>
                <Route path="/post/edit/:id" element={<h1>POST EDIT PAGE</h1>}/>
                <Route path="/profile" element={<h1>PROFILE</h1>}/>
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    );
}

export default App;
