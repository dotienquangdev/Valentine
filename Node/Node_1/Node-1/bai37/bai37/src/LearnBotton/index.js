import { ArrowsAltOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from 'react';
function LearnButton() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code: 200,
                data: []
            };
            if (result && result.code === 200) {
                setLoading(false);
            }
        }, 3000);
    }
    const handleClick1 = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code: 200,
                data: []
            };
            if (result && result.code === 200) {
                setLoading(false);
            }
        }, 2000);
    }
    const handleClick2 = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code: 200,
                data: []
            };
            if (result && result.code === 200) {
                setLoading(false);
            }
        }, 1000);
    }
    /*
    block : chiều rộng của button bằng chiều rộng của element cha boolean false
      danger Trạng thái của button dạng nguy hiểm (màu đỏ) kiểu boolean
      disabled Trạng thái của button bị vô hiệu hóa kiểu boolean
      ghost Backgroup trong suốt
      href Chèn link button giống link thẻ <a /> trong html kiểu string
      icon chèn icont vào button
      loading Thêm trạng thái loading cho button
      shape Hình dạng của button
      size Kích thức của button
      targert Giống target của thẻ <a />

      type Kiểu của Button: primary, ghost, dashed, link ,text
      onClick Lắng nghe sự kiện Click
      
      */
    return (
        <>
            <Button type="dashed" loading={loading} onClick={handleClick}
                disabled={loading}

                size='large'
            >Noi dung</Button>


            <Button type="dashed" loading={loading} onClick={handleClick1}
                danger={loading}

                size='middle'
            >Noi dung</Button>


            <Button type="dashed" loading={loading} onClick={handleClick2}
                disabled={loading}
                href='https://khoahoc.28teach.com.vn'
                size='small'
            >Noi dung</Button>


            <Button icon={<ArrowsAltOutlined rotate={45} spin={true} />}>Button</Button>
            <br></br>
        </>
    )
}
export default LearnButton;