/** @jsx jsx */
// import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const Container = styled.div`
  width: 200px;
  background-color: darkred;
  min-height: 100vh;
  color: white;
  padding: 10px;
  a {
    color: white;
    text-decoration: none;
  }
`
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
`
const Menus = styled.div`
`

function MenuItem({ to, children, active }) {
  return (
    <div css={css`
      padding: 10px;
      ${active ? 'background-color: darkgreen' : ''}
    `}>
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
            <MenuItem
              key={item.key}
              to={item.link}
              active={item.active}
            >{item.label}</MenuItem>
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
