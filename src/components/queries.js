import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Character($page: Int){
    characters(page: $page) {
      results {
        id
        name
        image
        status
        species
        location{
          name
        }
      }
    }
  }
`;
