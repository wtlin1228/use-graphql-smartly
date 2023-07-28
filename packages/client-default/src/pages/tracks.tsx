import { useQuery } from '@apollo/client';

import {
  IconApollo,
  Layout,
  QueryResult,
} from '@use-graphql-smartly/space-kit';

import logo from '../assets/space_cat_logo.png';
import { gql } from '../gql';
import TrackCard from '../containers/track-card';

// import { Layout } from "../components";
// import QueryResult from "../components/query-result";
// import TrackCard from "../containers/track-card";

/** TRACKS gql query to retrieve all tracks */
export const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  console.log(data);

  return (
    <Layout grid logo={logo}>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );

  return (
    <div>
      <IconApollo width="100px" height="40px" />
    </div>
  );
};

export default Tracks;
