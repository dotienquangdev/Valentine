import { useEffect, useState } from "react";
import "./style.css";

function QuestionCss() {
    const [data, setData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        const fetchApi = () => {
            fetch("http://localhost:3002/questions")
                .then(res => res.json())
                .then(data => {
                    setData(data);
                })
        };
        fetchApi();
    }, []);

    const handleSelectAnswer = (questionId, answerIndex) => {
        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionId]: answerIndex
        }));
    };

    return (
        <div className="questionAll">
            {data.length > 0 && data.map(item => (
                <div className="question-icon" key={item.id}>
                    <ul className="dsquestion">
                        <li>

                            <span>Bài {item.id}:</span>
                            {item.questionsCSS?.map((value) => (
                                <ul className="box" key={value.id}>
                                    <li>Câu: {value.id}</li>
                                    <li className="question">{value.question}</li>
                                    <ul className="answer">
                                        {value.answers?.map((answer, index) => (
                                            <li key={index} className="answer-item">
                                                <input className="input_text"
                                                    type="radio"
                                                    name={`question-${value.id}`}
                                                    checked={selectedAnswers[value.id] === index}
                                                    onChange={() => handleSelectAnswer(value.id, index)}
                                                />
                                                <label className="answer_text">{answer}</label>
                                            </li>
                                        ))}
                                    </ul>
                                    <li>Đáp án đúng: {value.correctAnswer + 1}</li>
                                </ul>
                            ))}


                        </li>
                        <button className="button_end" style={{ fontSize: '20px', width: '15%', height: '10%', color: 'red', marginBottom: '3%' }}>Gửi câu trả lời</button>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default QuestionCss;