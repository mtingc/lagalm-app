import { gql } from '@apollo/client';

import { IMAGE_FRAGMENT } from '@gql/image';
import { DETAILS_FRAGMENT } from '@gql/details';
import { INFO_FRAGMENT } from '@gql/info';

export const WORKAREA_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  ${DETAILS_FRAGMENT}
  fragment WorkAreaFragment on RrhhWorkArea {
    id
    title
    description
    image {
      ...ImageFragment
    }
    details {
      ...DetailsFragment
    }
  }
`;

export const GET_WORKAREAS = gql`
  ${INFO_FRAGMENT}
  ${WORKAREA_FRAGMENT}
  query GetWorkAreas($page: Int, $itemsPage: Int) {
    workAreas(page: $page, itemsPage: $itemsPage) {
      info {
        ...InfoFragment
      }
      status
      message
      workAreas {
        ...WorkAreaFragment
      }
    }
  }
`;
