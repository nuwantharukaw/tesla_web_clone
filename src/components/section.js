import React from 'react'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImg,leftButtonText,rightButtonText}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
                {leftButtonText}
            </LeftButton>
            {rightButtonText &&
              <RightButton>
                {rightButtonText}
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap=Styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;  //vertical
  align-items:center; //horizontal
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  //background-image:url('/images/model-s.jpg');
  background-image:${props=>`url("/images/${props.bgImage}")`};
`
const ItemText=Styled.div`
  padding-top:10vh;
  text-align:center;
`
const Buttons=Styled.div`
`
const ButtonGroup=Styled.div`
  display:flex;
  margin-bottom:30px;
  @media (max-width:768px){
    flex-direction:column;
  }
`
const LeftButton=Styled.div`
  background-color:rgba(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;
`
const RightButton=Styled(LeftButton)`
background-color:white;
opacity:0.8;
color:black;
`
const DownArrow=Styled.img`
  margin-top:20px;
  height:40px;
  animation: animateDown infinite 1.5s;
`