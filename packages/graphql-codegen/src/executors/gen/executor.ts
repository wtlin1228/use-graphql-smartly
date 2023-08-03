import { GenExecutorSchema } from './schema';

import type { ExecutorContext } from '@nx/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export default async function genExecutor(
  options: GenExecutorSchema,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  const { stdout, stderr } = await promisify(exec)(
    `npx graphql-code-generator --config packages/${context.projectName}/codegen.ts`
  );

  console.log(stdout);

  return { success: !stderr };
}
