import { vidu } from "../../data/viducode";
import "./viduCode.css"
function Viducode() {
    console.log(vidu);

    return (
        <>
            <ul className="code">
                {vidu.map(item => (
                    <li className="code1" key={item.id}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.gioitinh}</li>
                        <li>{item.namsinh}</li>
                        <ul className="code_tt" key={item.id}>
                            {item.thongtin.map(itemTT => (
                                <ul>
                                    <li>{itemTT.phone}</li>
                                    <li key={itemTT.id}>{itemTT.lever}</li>
                                    <ul className="code_tt-in" key={item.id}>
                                        {itemTT.subject.map(itemTTsj => (
                                            <ul>
                                                <li>{itemTTsj.math}</li>
                                                <li>{itemTTsj.phisical}</li>
                                                <li>{item.chemistry}</li>
                                            </ul>
                                        ))}
                                    </ul>
                                </ul>
                            ))}
                        </ul>
                    </li>

                ))}
            </ul>
        </>
    )
}
export default Viducode;