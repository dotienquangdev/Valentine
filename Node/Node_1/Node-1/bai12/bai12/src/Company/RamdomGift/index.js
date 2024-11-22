
import { useRef, useState } from "react";

function RandomGift() {
  const gifts = ["Dien thoai", "May tinh", "Xe may", "O to", "Dong ho", "Ti vi", "Tu lanh", "Quat chay"];
  const [result, setResult] = useState("");
  const couterRef = useRef(0);


  const handleRamdom = () => {
    if (couterRef.current < 3) {

      const ramdom = Math.floor(Math.random() * gifts.length);
      console.log(ramdom);
      setResult(gifts[ramdom]);
      couterRef.current = couterRef.current + 1;
    } else {
      alert("Bạn đã hết lượt.");
    }
  }
  console.log(couterRef);


  return (
    <>
      <button onClick={handleRamdom}>Ramdom</button>
      <div>Ban da trung thuong: {result}</div>
    </>
  )
}
export default RandomGift;