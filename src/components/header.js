import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Content>
    <h1>{siteTitle}</h1>
    <p>This is the header.js component</p>
  </Content>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: `Default boilerplate`,
}
export default Header

const Content = props => (
  <ContentWithStyle className="container-fluid hero">
    <div className="container">
      {props.children}
    </div>
  </ContentWithStyle>
)

const ContentWithStyle = styled.div`
  background-color: var(--header-bg); 
  height: 30vh;
  overflow: hidden;
  padding: 1rem 0;
`
