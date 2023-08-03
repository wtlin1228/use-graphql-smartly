import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { reactGraphqlClientGenerator } from './generator';
import { ReactGraphqlClientGeneratorSchema } from './schema';

describe('react-graphql-client generator', () => {
  let tree: Tree;
  const options: ReactGraphqlClientGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await reactGraphqlClientGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
