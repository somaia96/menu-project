import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
function NavScrollExample({itemsbySearch}) {
  const [inputValue, setInputValue] = useState("")
  const searching=()=>{
    itemsbySearch(inputValue)
    setInputValue("")
  }
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='color-brand' href="#">مطعم جديد</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              onChange={(e)=>{setInputValue(e.target.value)}}
              type="text"
              placeholder="ابحث.."
              className="me-2"
              aria-label="Search"
              value={inputValue}
            />
            <Button onClick={()=>{searching()}} className='mx-2 px-2 search-btn' size='sm' variant="light">ابحث</Button>
          </Form>
      </Container>
    </Navbar>
  );
}
export default NavScrollExample;