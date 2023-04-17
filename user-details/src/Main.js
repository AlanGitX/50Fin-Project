import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Main.css'


function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, SetUser] = useState([]);
  const [name, SetName] = useState("");
  const [mail, SetEmail] = useState("");
  const [phn, SetPhn] = useState("");
  const [zip, Setzip] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  
  const dismissAll = () =>  toast.dismiss();


  const submitData = async () => {
    if(!name||!mail||!phn||!zip){
      toast.error('Enter Valid details !', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message'

    });
      // alert('Cannot insert an empty value. Please check and reenter ')
    }
    else{

      toast.warning('Uploading details', {
        position: toast.POSITION.TOP_RIGHT,


    });
      

      const id = Math.random().toString(16).slice(-4);
      console.log(id);
  
      const body = {
        id,
        name,
        mail,
        phn,
        zip,
      };
      const result = await axios.post( "http://localhost:8000/newData", body);
      if(result){
        dismissAll()
        toast.success('Success !', {
          position: toast.POSITION.TOP_RIGHT
      });




      }
      console.log(result);
      getdata();
    }

  };

  const Name = (e) => {
    SetName(e.target.value);
    console.log(e.target.value);
  };

  const Email = (e) => {
    SetEmail(e.target.value);
    console.log(e.target.value);
  };

  const Phone = (e) => {
    SetPhn(e.target.value);
    console.log(e.target.value);
  };

  const Zipcode = (e) => {
    Setzip(e.target.value);
    console.log(e.target.value);
  };

  const getdata = async () => {
    let result = await axios.get("http://localhost:8000/getData");
    console.log(result.data.data);
    SetUser(result.data.data);
    setData(result.data.data)
  };

  const textchanged = (e) => {
    console.log(e.target.value.toLowerCase());
    if (!e.target.value) {
      setData(users)
      console.log(data);
    } else {
      var array = [];
      users.map((post) => {
        if (
          post.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          post.name.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          array.push(post);
        }
      });
      setData(array);
      console.log(data)
    }
  };

  const resetdata=() =>{
    SetName('')
    SetEmail('')
    SetPhn('')
    Setzip('')
  }

  
  return (
    <div className="mt-5">
      <div className="container text-center">
        <h1>
          User details
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, modi ad
          voluptatibus reprehenderit excepturi, vero odit earum dolores voluptas
          assumenda expedita quas non illum. Earum totam delectus fuga porro
          hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          architecto laborum velit numquam autem sunt debitis quae. Harum
          maiores iure qui fugit, numquam ullam natus amet dignissimos beatae
          illum aut?
        </p>

        <button className="btn btn-primary mt-3" onClick={()=>{
          handleShow();
        resetdata();}
        }>
            <i class="fa-solid fa-user-plus"></i> &nbsp; Add User
          </button>

          <ToastContainer />

        <Container className="mt-5">
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Col sm={4}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                  onChange={(e) => textchanged(e)}
                />
              </Form>
            </Col>
          </Row>
        </Container>

        <div
          className="row mt-5"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {data
            ? data.map((result) => (

                <div class="card m-5" style={{ width: "18rem" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{result.name}</h5>
                    <p class="card-text">
                      <p>Phone : {result.phone}</p>
                      <p>Email: {result.email}</p>
                      <p>Zipcode: {result.zipcode}</p>
                    </p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                autoFocus
                onChange={(e) => Name(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => Email(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Phone"
                onChange={(e) => Phone(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Zipcode"
                onChange={(e) => Zipcode(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              submitData();
            }}
          >
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Main;
