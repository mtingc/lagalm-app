import { gql } from '@apollo/client';

const DETAILS_FRAGMENT = gql`
  fragment DetailsFragment on Details {
    status
    creatorUserId
    creatorUser {
      name
      email
    }
    creationDate
    modifierUserId {
      name
      email
    }
    lastModification
  }
`;

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    name
    lastname
    email
    password
    birthday
    phone
    role
    lastSession
    details {
      ${DETAILS_FRAGMENT}
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      status
      message
      token
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    me {
      status
      message
      user {
        ${USER_FRAGMENT}
      }
    }
  }
`;
