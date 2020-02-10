/** @jsx jsx */
// import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'

import { GET_PROFILE_LIST } from '../../graphql/user'
import Table from '../../components/Table'
import Container from '../../components/Container'

function Members() {
  const columns = [{
    key: 'profileImage',
    name: 'Profile Image'
  }, {
    key: 'firstname',
    name: 'First Name'
  }, {
    key: 'lastname',
    name: 'Last Name'
  }, {
    key: 'nickname',
    name: 'Nickname'
  }, {
    key: 'birthdate',
    name: 'Birthdate'
  }]
  const { loading, error, data } = useQuery(GET_PROFILE_LIST, {
    variables: {
      language: 'en',
    }
  })
  if (loading) {
    return null
  }
  if (error) {
    return null
  }
  return (
    <Container>
      <h1>Members</h1>
      <Link to="/admin/members/new" css={css`float: right`}>Create</Link>
      <Table columns={columns} data={data.getProfileList} />
    </Container>
  )
}

export default Members
