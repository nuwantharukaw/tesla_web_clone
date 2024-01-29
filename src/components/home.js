import React from 'react'
import Styled from 'styled-components'
import Section from './section'

function Home() {
  return (
    <Container>
            <Section
              title="Model S"
              description="Order Online For Touchless Delivery"
              backgroundImg="model-s.jpg"
              leftButtonText="Custom Order"
              rightButtonText="Existing Inventory"
            />
            <Section
              title="Model Y"
              description="Order Online For Touchless Delivery"
              backgroundImg="model-y.jpg"
              leftButtonText="Custom Order"
              rightButtonText="Existing Inventory"
            />
            <Section
              title="Model 3"
              description="Order Online For Touchless Delivery"
              backgroundImg="model-3.jpg"
              leftButtonText="Custom Order"
              rightButtonText="Existing Inventory"
            />
            <Section
              title="Model X"
              description="Order Online For Touchless Delivery"
              backgroundImg="model-x.jpg"
              leftButtonText="Custom Order"
              rightButtonText="Existing Inventory"
            />
            <Section
              title="Lowest Cost Solar Panels in America"
              description="Money-back Guarantee"
              backgroundImg="solar-panel.jpg"
              leftButtonText="Order now"
              rightButtonText="Learn more"
            />
            <Section
              title="Solar for New Roofs"
              description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
              backgroundImg="solar-roof.jpg"
              leftButtonText="Order now"
              rightButtonText="Learn more"
            />
            <Section
              title="Accessories"
              description=""
              backgroundImg="accessories.jpg"
              leftButtonText="Shop now"
            />
    </Container>
  )
}

export default Home

const Container=Styled.div`
    height:100vh;
`