import { config as dotenvConfig, DotenvConfigOutput } from 'dotenv';

import { EnvtsOptions } from './types';

let lastParse: DotenvConfigOutput;

export default <T extends Record<string, unknown>>(options?: EnvtsOptions): T => {
  const { config, forceLoad } = options ?? {};

  if (!lastParse || forceLoad)
    lastParse = dotenvConfig(config);

  const { parsed = {} } = lastParse;

  return {
    ...process.env,
    ...Object.keys(parsed)
      .reduce((p, c) => Object.assign(p, { 
        [c]: isNaN(+parsed[c]) ? parsed[c] : +parsed[c],
      }), {}),
  } as T;
};