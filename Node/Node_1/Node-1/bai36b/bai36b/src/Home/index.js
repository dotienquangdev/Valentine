import QuestionAll from "../Body/questionAll";
import Homes from "./Header/Homes";

function HomeAll() {

    return (
        <>
            <div className="home">

                <header className="home_header">
                    <Homes />
                </header>

                <nav className="home_body">
                    <QuestionAll />
                </nav>

                <footer className="home_footer"></footer>

            </div>
        </>
    )
}

export default HomeAll;