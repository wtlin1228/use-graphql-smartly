import { GraphqlCodegenExecutorSchema } from './schema';

import type { ExecutorContext } from '@nx/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export default async function genExecutor(
  options: GraphqlCodegenExecutorSchema,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  const configFile = options.configFile || 'codegen.ts';
  const { stdout, stderr } = await promisify(exec)(
    `npx graphql-code-generator --config packages/${context.projectName}/${configFile}`
  );

  console.log(stdout);

  return { success: !stderr };
}
