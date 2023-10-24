import React,{useState} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import Flip from 'react-reveal/Flip';
const Header = ({itemsbyType,dataItems}) => {
  const arrayOfType= new Set(dataItems.map((item)=>{return (item.type)}))
  const [dataBtn, ] = useState(["الكل",...arrayOfType])
  const choiseType=(type)=>{
    itemsbyType(type)
  }
  return (
    <div>
    <Row className='head'>
      <Col><h2>قائمة الطعام</h2></Col>
    </Row>
    <Row className='justify-content-center mb-5'>
      {dataBtn.map((item)=>{
        return (
          <Col className='fit' key={dataBtn.indexOf(item)}><Flip  key={dataBtn.indexOf(item)} left><Button onClick={()=>{choiseType(item)}} className='btn-red btn-light'>{item}</Button></Flip></Col>
        )
      })}
    </Row>
    </div>
  )
}

export default Header
