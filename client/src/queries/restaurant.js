/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANT = gql`
  query restaurant($id: ID!) {
    restaurant(id: $id) {
      name
      description
      cover {
        url
      }
    }
  }
`;

export { GET_RESTAURANT };
