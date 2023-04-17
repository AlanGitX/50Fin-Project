
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://pixlok.com/wp-content/uploads/2021/03/default-user-profile-picture.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            User Data
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header