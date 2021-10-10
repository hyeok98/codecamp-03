import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      tags
      createdAt
      seller {
        _id
        email
        name
        picture
      }
    }
  }
`;
