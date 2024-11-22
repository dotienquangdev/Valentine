import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionJava() {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (!loggedInUser) {
            navigate('/login'); // Điều hướng tới trang đăng nhập nếu chưa đăng nhập
        }
    }, [navigate]);

    return (
        <div>
            <h2>Danh sách câu hỏi Java</h2>
            {/* Gọi component hiển thị câu hỏi ở đây */}
        </div>
    );
}

export default QuestionJava;