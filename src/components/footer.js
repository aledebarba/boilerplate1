import React from 'react'
import styled from 'styled-components'

const Footer = (props) => {
  return (
    <Content className="container-fluid mt-3">
      <div className="row justify-content-center">
            <p>This is the footer component</p>
            {props.children}
      </div>
    </Content>
  )
}
export default Footer

const Content = styled.div`
  color: var(--body-inverse-color);
  background-color: var(--footer-bg);
  text-align: center;
  position: relative;
  min-height: 10vh;
  padding: 20px; 
`
