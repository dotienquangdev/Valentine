import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import QuestionJava from './QuestionJava'; // Trang câu hỏi
import Login from './Login';
import Register from './Register';

function UserAdim() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/questions" element={<QuestionJava />} />
                </Routes>
            </div>
        </Router>
    );
}

export default UserAdim;