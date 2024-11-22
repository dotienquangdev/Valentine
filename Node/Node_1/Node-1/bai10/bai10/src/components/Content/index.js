import { DiAndroid } from "react-icons/di";
function Content(a) {
    console.log(a);
    console.log(a.text)
    const hi = {
        margin: "0px 10px",
        padding: "0px 10px",
        background: "red",
        color: "white",
        fontSize: "20px",
        width: "280px",
        height: "50px"

    }
    return (

        <>
            <DiAndroid />
            <div className={"box" + (a.active ? "box_active" : "")} style={hi}>
                {a.text} - {a.number}
            </div>
        </>
    )
}
export default Content