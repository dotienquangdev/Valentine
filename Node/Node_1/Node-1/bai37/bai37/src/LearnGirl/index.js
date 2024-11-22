import { Col, Row } from "antd";
import "./style.css"

function LearnGirl() {

    return (
        <>

            <Row gutter={[10, 20]}>
                <Col span={2}>
                    <div className="box">Cot 1</div>
                </Col>
                <Col span={4}>
                    <div className="box">Cot 2</div>
                </Col>
                <Col span={8}>
                    <div className="box">Cot 3</div>
                </Col>
                <Col span={10}>
                    <div className="box">Cot 4</div>
                </Col>
            </Row>
            <br></br>

            <Row gutter={[10, 20]}>
                <Col xxl={2} lg={3} md={6} xs={24}>
                    <div className="box">Cot 1</div>
                </Col>
                <Col xxl={4} lg={3} md={6} xs={24}>
                    <div className="box">Cot 2</div>
                </Col>
                <Col xxl={8} lg={9} md={6} xs={24}>
                    <div className="box">Cot 3</div>
                </Col>
                <Col xxl={10} lg={9} md={6} xs={24}>
                    <div className="box">Cot 4</div>
                </Col>
            </Row>
        </>
    )
}
export default LearnGirl;