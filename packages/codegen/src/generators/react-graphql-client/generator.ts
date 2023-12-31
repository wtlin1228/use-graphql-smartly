import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ReactGraphqlClientGeneratorSchema } from './schema';

export async function reactGraphqlClientGenerator(
  tree: Tree,
  options: ReactGraphqlClientGeneratorSchema
) {
  const projectRoot = `packages/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default reactGraphqlClientGenerator;
