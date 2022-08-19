import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: 'http://localhost:2002/',
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link,
});

export default client;
