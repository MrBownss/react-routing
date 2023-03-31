import { Container, Row, Col } from "react-bootstrap"

const Biografi = () => {
    return(
        <div className="bg-home min-vh-100">
            <Container >
                <Row>
                    <Col className=" text-dark p-5 mt-5">
                        <div className="row justify-content-center d-flex">
                            <h5 className="ms-5 text-white">
                            Menurut Oxford Dictionary, hospitality memiliki arti yang setara dengan friendly yang artinya ramah. Sedangkan pada kamus daring Merriam Webster, hospitality memiliki dua makna yaitu, hospitable yang artinya, penyambutan, perlakuan, dan perilaku, serta diartikan kegiatan bisnis dengan fokus pada layanan untuk tamu.
                            <br />
                            Secara umum, hospitality merupakan kegiatan yang menyebabkan interaksi host atau tuan rumah dengan guests atau tamu pada saat bersamaan dengan menyediakan layanan akomodasi juga seperti makanan dan minuman.
                            <br />
                            Hospitality dapat ditinjau dari berbagai sudut pandang, seperti sosial, pribadi (private), komersial, industri, korporat dan venue. Misalnya, dengan pendekatan sosial, hospitality adalah kegiatan membangun relasi dan simbolik antara host dengan guest supaya tamu tersebut merasa nyaman dengan penjamuan yang ditawarkan pada pelayanan hospitality.
                            <br />
                            Untuk para pelaku hospitality, mereka akan membantu para tamu dan dilayani sebaik mungkin, hingga mereka nyaman sampai tamu tersebut merasa nyaman seperti mereka berada di rumah sendiri.
                            <br />
                            Jadi hospitality bukan hanya mengenai akomodasi penginapan pada industri hotel yang seperti kita tahu secara umum. Konsep hospitality memiliki standar operasional masing-masing pelaku bisnis yang sudah diatur dan disesuaikan, kemudian tindakan untuk menjamu serta melayani tamu didasarkan rasa kasih dan ketulusan.
                            </h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Biografi
