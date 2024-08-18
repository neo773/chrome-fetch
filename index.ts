import fetchToCurl, { type FetchOptions } from 'fetch-to-curl';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function chromeFetch(
  requestInfo: string | FetchOptions,
  requestInit?: FetchOptions
): Promise<string> {
  const mergedInit: FetchOptions = {
    ...requestInit,
    headers: {
      ...(typeof requestInfo === 'object' ? requestInfo.headers : {}),
      ...(requestInit?.headers || {}),
    },
  };

  const curlString = fetchToCurl(requestInfo, mergedInit);
  const curlImpersonateString = curlString.replace('curl', 'curl-impersonate-chrome');

  try {
    const { stdout, stderr } = await execAsync(curlImpersonateString);
    if (stderr && !stdout) {
      throw new Error(stderr);
    }
    return stdout;
  } catch (error) {
    throw error;
  }
}