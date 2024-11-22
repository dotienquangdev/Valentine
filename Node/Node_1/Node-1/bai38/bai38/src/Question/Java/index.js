import { useEffect, useState } from "react";
import "./style.css";

function QuestionJava() {
    const [data, setData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
    const [correctCount, setCorrectCount] = useState(0); // State to store correct answer count
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track if answers are submitted

    useEffect(() => {
        const fetchApi = () => {
            fetch("http://localhost:3002/questions")
                .then(res => res.json())
                .then(data => {
                    setData(data);
                });
        };
        fetchApi();
    }, []);

    const handleSelectAnswer = (questionId, answerIndex) => {
        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionId]: answerIndex
        }));
    };

    const toggleShowCorrectAnswers = () => {
        setShowCorrectAnswers(prevState => !prevState);
    };

    // Function to calculate the number of correct answers
    const handleSubmitAnswers = () => {
        let correct = 0;
        data.forEach((item) => {
            item.questionsJava?.forEach((question) => {
                if (selectedAnswers[question.id] === question.correctAnswer) {
                    correct++;
                }
            });
        });
        setCorrectCount(correct); // Update the correct answer count
        setIsSubmitted(true); // Mark as submitted
    };

    return (
        <>
            <div className="questionHTML">


                {data.length > 0 && data.map(item => (
                    <div className="question-icon" key={item.id}>
                        <ul className="dsquestion">
                            <li>
                                {item.questionsJava?.map((value) => (
                                    <ul className="box" key={value.id}>
                                        <li>Câu: {value.id}</li>
                                        <li className="question">{value.question}</li>
                                        <ul className="answer">
                                            {value.answers?.map((answer, index) => (
                                                <li key={index} className="answer-item">
                                                    <input
                                                        className="input_text"
                                                        type="radio"
                                                        name={`question-${value.id}`}
                                                        checked={selectedAnswers[value.id] === index}
                                                        onChange={() => handleSelectAnswer(value.id, index)}
                                                    />
                                                    <label className="answer_text">{answer}</label>
                                                </li>
                                            ))}
                                        </ul>
                                        {showCorrectAnswers && (
                                            <li>Đáp án đúng: {value.correctAnswer + 1}</li>
                                        )}
                                    </ul>
                                ))}
                                {!isSubmitted && (
                                    <button
                                        onClick={handleSubmitAnswers} // Trigger answer submission
                                        className="button_end"
                                        style={{ fontSize: '20px', width: '15%', height: '10%', color: 'red', marginBottom: '3%' }}
                                    >
                                        Gửi câu trả lời
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                ))}

                {/* Display result after submission */}
                {isSubmitted && (
                    <div className="result">
                        <h2>Bạn đã trả lời đúng {correctCount}/{data.reduce((total, item) => total + (item.questionsJava?.length || 0), 0)} câu hỏi.</h2>
                        <button onClick={toggleShowCorrectAnswers} className="toggle-button">
                            {showCorrectAnswers ? 'Ẩn đáp án đúng' : 'Xem đáp án đúng'}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default QuestionJava;