import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <h1>{siteTitle}</h1>
    <p>Default boilerplate</p>
    <Link to="/">Back to home</Link>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Default boilerplate`,
}

export default Header

const Wrapper = props => (
  <Content className="container-fluid hero">
    <div className="container">{props.children}</div>
  </Content>
)

const Content = styled.div`
  background-color: var(--header-bg);
  height: 30vh;
  padding: 1rem 0;
`
