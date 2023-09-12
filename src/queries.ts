import { gql } from "@apollo/client";
export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      code
      emoji
      emojiU
      capital
      languages {
        code
        name
        native
        rtl
      }
      continent {
        name
        code
      }
    }
  }
`;
export const GET_CONTINENTS = gql`
  query ListAllContinents {
    continents {
      code
      name
    }
  }
`;