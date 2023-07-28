import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { GlobalStylesReset } from '@use-graphql-smartly/space-kit';
import GlobalStyles from './styles';

import Pages from './pages';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStylesReset />
    <GlobalStyles />
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  </StrictMode>
);
