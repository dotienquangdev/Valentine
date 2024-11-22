import QuestionCss from "../questionCSS";
import QuestionHtml from "../questionHTML";
import QuestionJS from "../questionJavaScript";
import QuestionReactJS from "../questionReactJS";
import "./style.css"

function QuestionAll() {

    return (
        <>
            <h1>Danh sách các bài test:</h1>
            <div className="pandemic">
                <ul className="pandemic_box">
                    <li><QuestionHtml /></li>
                    <li><QuestionCss /></li>
                    <li><QuestionJS /></li>
                    <li><QuestionReactJS /></li>
                </ul>
            </div>
        </>
    )
}
export default QuestionAll;