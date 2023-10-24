import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
const MenuList = ({dataItems}) => {
  return (
    <Container>
      {dataItems.map((item)=>{
        let src="./images/"+item.img
        return (
          <Zoom  key={item.id}>
          <Row key={item.id} className='menu-once my-3'>
            <Col className='img-size col-3'><img className='image' src={src} alt="food" /></Col>
            <Col className='name mt-2'>
              <Row className='nowrap justify-content-between'><h6 className='shrink'>{item.name}</h6><h6 className='price'>{item.price}</h6></Row>
              <Row><p className='lead fs-6'>{item.details}</p></Row>
            </Col>
          </Row>
          </Zoom>
        )
      })}
    </Container>
    
  )
}

export default MenuList
