import { gql } from '@apollo/client';

const INFO_FRAGMENT = gql`
  fragment InfoFragment on ResultInfo {
    page
    total
    itemsPage
    pages
  }
`;

export const DETAILS_FRAGMENT = gql`
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

export const USER_FRAGMENT = gql`
  ${DETAILS_FRAGMENT}
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
      ...DetailsFragment
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
  ${USER_FRAGMENT}
  query GetUser {
    me {
      status
      message
      user {
        ...UserFragment
      }
    }
  }
`;

export const GET_USERS = gql`
  ${INFO_FRAGMENT}
  ${USER_FRAGMENT}
  query GetUsers($page: Int, $itemsPage: Int) {
    users(page: $page, itemsPage: $itemsPage) {
      info {
        ...InfoFragment
      }
      status
      message
      users {
        ...UserFragment
      }
    }
  }
`;
