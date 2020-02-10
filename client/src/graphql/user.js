import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      userId
    }
  }
`

export const GET_PROFILE_LIST = gql`
  query ($language: String!) {
    getProfileList (language: $language) {
      _id
      profileImage
      firstname
      lastname
      nickname
      birthdate
    }
  }
`

export const CREATE_PROFILE = gql`
  mutation (
    $language: String!,
    $firstname: String!,
    $lastname: String!,
    $nickname: String!,
    $profileImage: String!,
    $gender: String!,
    $birthdate: Date!,
  ) {
    createProfile (
      language: $language,
      firstname: $firstname,
      lastname: $lastname,
      nickname: $nickname,
      profileImage: $profileImage,
      gender: $gender,
      birthdate: $birthdate,
    ) {
      _id
      firstname
      lastname
    }
  }
`
