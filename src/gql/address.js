import { gql } from '@apollo/client';

export const ADDRESS_FRAGMENT = gql`
  fragment AddressFragment on Address {
    street
    number {
      interior
      exterior
    }
    colony
    municipality
    state
    country
    zipCode
    streets {
      a
      b
    }
  }
`;
