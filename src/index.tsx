// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import App from './App';

// const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
//   cache: new InMemoryCache(),
// });

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

//   credentials: 'same-origin',
  // headers: {Authorization: 'Bearer abc123'}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
