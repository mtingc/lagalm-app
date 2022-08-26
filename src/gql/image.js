import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql`
  fragment ImageFragment on Image {
    height
    width
    url
  }
`;
