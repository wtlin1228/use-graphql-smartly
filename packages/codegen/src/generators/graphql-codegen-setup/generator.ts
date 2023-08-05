import {
  updateJson,
  formatFiles,
  generateFiles,
  Tree,
  ProjectConfiguration,
  TargetConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import { GraphqlCodegenSetupGeneratorSchema } from './schema';

export async function graphqlCodegenSetupGenerator(
  tree: Tree,
  options: GraphqlCodegenSetupGeneratorSchema
) {
  const projectRoot = `packages/${options.projectName}`;

  const codegenTarget: TargetConfiguration = {
    executor: '@use-graphql-smartly/codegen:graphql-codegen',
    options: {},
  };

  updateJson(
    tree,
    `${projectRoot}/project.json`,
    (json: ProjectConfiguration) => {
      if (!json.targets) {
        json.targets = {};
      }
      json.targets['codegen'] = codegenTarget;

      return json;
    }
  );

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default graphqlCodegenSetupGenerator;
