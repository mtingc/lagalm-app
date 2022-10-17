import { gql } from '@apollo/client';

import { ADDRESS_FRAGMENT } from '@gql/address';
import { IMAGE_FRAGMENT } from '@gql/image';
import { DETAILS_FRAGMENT } from '@gql/details';

import { INFO_FRAGMENT } from '@gql/info';

export const USER_FRAGMENT = gql`
  ${ADDRESS_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${DETAILS_FRAGMENT}
  fragment UserFragment on User {
    id
    name
    lastname
    birthday
    gender
    maritalStatus
    curp
    address {
      ...AddressFragment
    }
    email
    password
    phone
    role
    lastSession
    avatar {
      ...ImageFragment
    }
    rfc
    schooling
    nss
    infonavitCredit
    job {
      workAreaId {
        id
        title
      }
      description
      schedule {
        from
        to
      }
      salary
      accountNumber
    }
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

export const REGISTER_USER = gql`
  ${USER_FRAGMENT}
  mutation RegisterUser($user: UserInput!) {
    register(user: $user) {
      status
      message
      user {
        ...UserFragment
      }
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
