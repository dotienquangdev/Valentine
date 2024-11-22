import { useRef, useState } from "react";

function RandomGit() {
    const gifts = ["Điện thoại", "Máy tính", "Xe máy", "Ô tô", "Đồng hồ"];
    const [result, setResult] = useState("");
    const counterRef = useRef(0);


    const handleRandom = () => {
        if (counterRef.current < 3) {
            const random = Math.random() * gifts.length;
            const random1 = Math.floor(random);
            setResult(gifts[random1]);
            console.log(random1)

            counterRef.current = counterRef.current + 1;
        } else {
            alert("Ban da het luot")
        }
    }
    console.log(counterRef);
    return (
        <>  <br></br>
            <button onClick={handleRandom}>Random</button>

            <div>Bạn đã trúng thưởng:{result}</div>
        </>
    )
}
export default RandomGit;