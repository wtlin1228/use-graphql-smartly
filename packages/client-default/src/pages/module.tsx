import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Layout, QueryResult } from '@use-graphql-smartly/space-kit';

import { gql } from '../gql';
import logo from '../assets/space_cat_logo.png';
import ModuleDetail from '../components/module-detail';

/**
 * GET_MODULE_AND_PARENT_TRACK gql query to retrieve a specific module and its parent track,
 * both needed for the ModuleDetail component
 */
const GET_MODULE_AND_PARENT_TRACK = gql(`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`);

/**
 * Module page fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the ModuleDetail component
 */
const Module = () => {
  const { moduleId = '', trackId = '' } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { moduleId, trackId },
  });

  console.log(data);

  return (
    <Layout fullWidth logo={logo}>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
