import { gql } from '@apollo/client';

export const INFO_FRAGMENT = gql`
  fragment InfoFragment on ResultInfo {
    page
    total
    itemsPage
    pages
  }
`;
