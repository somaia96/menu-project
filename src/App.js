import React,{useState} from "react";
import MenuList from "./components/MenuList";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import data from './data'

const App=()=>{
  const [dataItems, setDataItems] = useState(data)
  const itemsbyType=(type)=>{
    if(type === "الكل"){
      setDataItems(data)
    } else{
      const newItems = data.filter((item)=>item.type === type)
    setDataItems(newItems)
    }
  }
  const itemsbySearch=(word)=>{
    if(word === ""){
      setDataItems(data)
    } else{
      const newItems = data.filter((item)=>item.name === word)
    setDataItems(newItems)
    }
  }
    return(
        <div>
          <NavBar itemsbySearch={itemsbySearch} />
          <Container>
          <Header itemsbyType={itemsbyType} dataItems={dataItems}/>
          <MenuList dataItems={dataItems}/>
          </Container>
        </div>
        )
    }

    export default App;