import React from 'react'
import styled from 'styled-components'

const Footer = (props) => {
  return (
    <StyledFooter className="container-fluid">
        <div className="container">
            {props.children}
        </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
  color: var(--body-inverse-color);
  background-color: var(--footer-bg);
  text-align: center;
  position: absolute;
  min-height: 10vh;
  bottom: 0;
  left: 0;
  padding: 20px;
  margin:0;
  
`
