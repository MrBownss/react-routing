import { Container, Row, Col } from "react-bootstrap"

const Home = () => {
    return(
        <div className="bg-home min-vh-100">
            <Container >
                <Row>
                    <Col className=" text-dark p-5 mt-5">
                        <div className="text-center text-white row justify-content-center d-flex">
                        <h1 className="fw-bold">HOSPITALYTI</h1>
                        <h5>is</h5>
                        <h5>SIMPLY AN OPPORTUNITY TO SHOW LOVE and CARE</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home