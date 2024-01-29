import React, {useState} from 'react'
import Styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux'


function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars=useSelector(selectCars);
  console.log(cars)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg"/>
      </a>
      <Menu>
        {cars && cars.map((car,index)=> (<a key={index} href='#'>{car}</a>))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car,index)=> (<li><a key={index} href='#'>{car}</a></li>))}
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>


      </BurgerNav>
    </Container>
  )
}

export default Header

const Container=Styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0px 20px;
  top:0px;
  left:0px;
  right:0px;
  z-index:1;
`
const Menu=Styled.div`
  display:flex;
  aligh-items-center;
  justify-content:center;
  flex:1;

  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0px 10px;
    flex-wrap:nowrap;
  }

  @media(max-width:768px){
    display:none;
  }
`
const RightMenu=Styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    margin-right:10px;
    flex-wrap:nowrap;
  }
`
const CustomMenu=Styled(MenuIcon)`
  cursor:pointer;
`
const BurgerNav=Styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  list-style:none;
  padding:20px;
  display:flex;
  text-align:start;
  flex-direction:column;
  transform:${props=>props.show ? `translateX(0%)`: `translateX(100%)`};
  transition:transform 0.2s;

  li{
    padding:15px 0px;
    border-bottom:1px solid rgba(0,0,0,.2);

    a{
      font-weight:600;
    }
  }
`
const CloseWrapper=Styled.div`
  display:flex;
  justify-content:flex-end;
`
const CustomClose=Styled(CloseIcon)`
  cursor:pointer;
`