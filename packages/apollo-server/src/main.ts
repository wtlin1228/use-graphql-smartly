import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

import { TrackAPI } from './datasources/track-api';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const { cache } = server;

    return {
      dataSources: {
        trackAPI: new TrackAPI({ cache }),
      },
    };
  },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
