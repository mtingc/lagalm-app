import { gql } from '@apollo/client';

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
