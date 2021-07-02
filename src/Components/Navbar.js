import React from 'react';
import { Navbar } from 'react-bootstrap';
export default function Navbar() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">ToDo LIST</Navbar.Brand>
        </Navbar>
        <br />
      </div>
    </>
  );
}
