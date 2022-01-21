import { gql } from '@apollo/client';

// will generate a checkout session with stripe
export const QUERY_CHECKOUT = gql `
  query getCheckout($meals: [Meal]!) {
    checkout(meals: $meals) {
      session
    }
  }
`;

// to get meals by category
export const QUERY_MEALS = gql `
  query getMeals($category: ID) {
    meals(category: $category) {
      _id
      name
      ingredient
      price
      image
      category {
        _id
      }
    }
  }
`;
// get a list of all meals in database
export const QUERY_ALL_MEALS = gql `
  {
    meals {
      _id
      name
      ingredients
      price
      category {
        name
      }
    }
  }
`;
// returns list of categories from database
export const QUERY_CATEGORIES = gql `
  {
    categories {
      _id
      name
    }
  }
`;

// gets all information about logged in user
export const QUERY_USER = gql `
  {
    user {
      firstName
      lastName
      email
      subscriptions {
        _id
        purchaseDate
        meals {
          _id
          name
          ingredients
          price
          quantity
          image
        }
      }
    }
  }
`;