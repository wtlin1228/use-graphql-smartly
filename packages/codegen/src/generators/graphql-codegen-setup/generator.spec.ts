import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { graphqlCodegenSetupGenerator } from './generator';
import { GraphqlCodegenSetupGeneratorSchema } from './schema';

describe('graphql-codegen-setup generator', () => {
  let tree: Tree;
  const options: GraphqlCodegenSetupGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await graphqlCodegenSetupGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
