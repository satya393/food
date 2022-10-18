import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



class AdminLogin extends Component {
  render() {
    return (
      <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

</>
        
    );
  }
}

export default AdminLogin;



// import React, { useRef } from 'react'



// import { useRef, useState, useEffect } from 'react';

// const AdminLogin = () => {
//  const useRef = useRef();
//  const errRef = useRef();


//  const [user , setUser] = useState('');
//  const [pwd , setPwd] = useState('');
//  const [errMsg , setErrMsg] = useState('');
//  const [success , setSuccess] = useState(false);

//         useEffect(() => {
//           useRef.current.focus();
//         }, [])

//         useEffect(() => {
//           setErrMsg('');
//         }, [user , pwd])

//   return (
//     <section>
//       <p ref = {errRef} className={errMsg ? "errMsg":"offscreen"} aria-alive="assertive"> {errMsg} </p>
//       <h1>Signin</h1>
//     </section>
//   )
// }
// AdminLogin();
// export default AdminLogin;