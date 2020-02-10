import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 200px;
  background-color: red;
  min-height: 100vh;
`
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`
const Menus = styled.div`
`

function MenuItem({ to, children }) {
  return (
    <div>
      <Link to={to}>{children}</Link>
    </div>
  )
}

function SideMenu({ menus }) {
  return (
    <Container>
      <Logo>Family</Logo>
      <Menus>
        {
          menus.map((item) => (
            <MenuItem key={item.key} to={item.link}>{item.label}</MenuItem>
          ))
        }
      </Menus>
    </Container>
  )
}

SideMenu.defaultProps = {
  menus: []
}

SideMenu.propTypes = {
  menus: PropTypes.array
}

export default SideMenu
