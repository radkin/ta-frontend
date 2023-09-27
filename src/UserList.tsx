// src/UserList.tsx

import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query {
    fetchUsers {
      name {
        last
        first
        title
      }
      dob {
        date
      }
      gender
      registered {
        date
      }
      picture {
        medium
      }
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  // console.log(data);

  return (
    <ul>
      {
        React.Children.toArray(
          data.fetchUsers.map((ru: any) => (
            <ul>
            <li>{ru.gender}</li>
            <li>{ru.name.first}</li>
            </ul>
          ))
        )
      }

    </ul>
  );
}

export default UserList;
