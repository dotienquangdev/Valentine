import "./style.css";
import "./script"
function CodeQr() {


    return (
        <>
            <form>
                <h2>Quét mã Wifi</h2>
                <div className="internal">
                    <img width={164} src="https://api.qrserver.com/v1/create-qr-code/?size-164x164&data=$" />

                    <div className="inputs">
                        <label>
                            Tên mạng Wifi
                            <input className="ssid" placeholder="Nhập tên Wifi..."></input>
                        </label>

                        <label>
                            Mật khẩu
                            <input className="password" placeholder="Nhập mật khẩu..."></input>
                        </label>

                    </div>

                    <p>
                        Hướng Camere điện thoại của bạn vào mã Qr để kết nối với Wifi
                    </p>
                    <button type="button">In mã Qr Wifi</button>
                </div>
            </form>
        </>
    )
}
export default CodeQr;