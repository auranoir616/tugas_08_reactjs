
import React,{useState} from "react";
import {
Dropdown,
Carousel,
Breadcrumb,
Stack,
Container,
Col,
Row,
ListGroup,
Button,
Form,
Modal
} from "react-bootstrap"
function App() {
  const [tampil, tampilkan] = useState(false);

  const tutup = () => tampilkan(false);
  const buka = (event) => {event.preventDefault();
  tampilkan(true);}

  return (
    <div >

      <Stack direction="horizontal" gap={3} style={{backgroundColor: "black", height: "75px",width:"100%"}}>

      <div className="p-2" style={{display:"flex", justifyContent:"left" ,height:"75px", marginTop:"0"}}>
<div>
      <Dropdown >
      <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm">
       Pilih Bahasa
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Inggris</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Jawa</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
      </div>
     <div className="p-2 ms-auto"></div>
      <div className="p-2" style={{ marginLeft: "auto", height:"75px",width:"150px", display: "flex", flexDirection:"column", justifyContent:"center",alignItems:"center",}}>
     <div style={{margin: "5px", height:"65px",display: "flex", flexDirection:"column",flexWrap:"wrap", justifyContent:"center",alignItems:"center",}}>
      <img src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width='50px' height='50px' alt="" />
      <br/>
      </div>
      <div>
      <p style={{color:"white", margin:"0"}}>Febrianto Fitra </p>
      </div>
      </div>
   
    </Stack>
    <div style={{display:"flex", flexDirection:"row-reverse"}}>
    <div style={{padding:"5px 0 0 20px", width:"350px", backgroundColor:"#f2f2f2", borderRadius:"5px", marginRight:"5px"}}>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Berita
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Bola</Breadcrumb.Item>
    </Breadcrumb>
    </div>
    </div>

    <Container>
      <Row>
        <Col>
        <Carousel>
      <Carousel.Item>
        <img alt=""
        className="d-block w-100" 
        src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg"
        width="500px" height="500px"
        />
        <Carousel.Caption>
          <h3>Neymar bahas Kontrak Baru Di Paris Saint-Germain</h3>
          <p>Ayah sang pemain bintang brasil berusaha meredan rumor ketertarikan madrid.Neymar sedang berdiskusi dengan 
        Paris Saint-Germain sial perpanjangan kontrak, bersama kampuin ligue 1 prancis demikian kata ayahnya</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img alt=""
        className="d-block w-100" 
        src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg"
        width="500px" height="500px"
        />
        <Carousel.Caption>
          <h3>Inggris Mau Jadi Tim Terbaik di Dunia</h3>
          <p> Kumpulan talenta terbaik yang dimiliki inggris saat ini membuat barkley sangat optimis. ross barkley merasa inggrissudah 
        berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt=""
        className="d-block w-100" 
        src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg"
        width="500px" height="500px"
        />
        <Carousel.Caption>
          <h3>sani rizki fauzi tegaskan mental pemain timnas indonesia U-23 Tetap bagus</h3>
          <p>Gelandang tim nasional (timnas)indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan brunei darusalam 
        U-23. kedua tim akan bentrok pada laga pamungkas grup K</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Col>
    </Row>
    
    </Container>
    <div width="100%" style={{margin:"20px 30px 20px 30px" }}>
        <Row>
          <Col>
          <ListGroup>
      <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
      <ListGroup.Item>Liga Premier inggris</ListGroup.Item>
      <ListGroup.Item>Divisi premire</ListGroup.Item>
      <ListGroup.Item>Serie A</ListGroup.Item>
      <ListGroup.Item>Ligue 1</ListGroup.Item>
      <ListGroup.Item>Bundes Liga</ListGroup.Item>
    </ListGroup>
          </Col>
          <Col>
          <div style={{backgroundColor:"#f2f2f2", height:"250px",width:"100%",display:"flex", borderRadius:"5px"}}>
            <div style={{ width:"50%", height:"50%", margin:"30px 0 20px 15px"}}>
            <h1>DIVISI PRIMERA</h1>
            <p>Main untuk Catalunya, Gerard Pique Minta Dihormati</p>
            <Button>Read More</Button>
            </div>
          </div>
          </Col>
          <Col>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"}}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <img src="https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png" width="75px" height="75px" alt=""/>
    
      <h2>Silahkan Login</h2>
          </div>
          <div style={{width:"100%"}}>
          <Form>
          <Form.Group>
            <Form.Control type="email" placeholder="masukkan Email"/>
          </Form.Group>
          <br/>
          <Form.Group>
            <Form.Control type="password" placeholder="masukkan password"/>
          </Form.Group>
          <Form.Group>
          <Form.Check type="checkbox" label="Term & Conditions."/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={buka}>Login</Button>
        </Form>
        </div>
        <Modal show={tampil} onHide={tutup}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>anda berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={tutup}>
            Close
          </Button>
          <Button variant="primary" onClick={tutup}>
            Save Username & password
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
          </Col>
        </Row>
        </div>
       
    </div>
  );
}

export default App;
