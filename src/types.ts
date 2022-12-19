import { DotenvConfigOptions } from 'dotenv';

export type EnvtsOptions = {
  config?: DotenvConfigOptions,
  forceLoad?: boolean,
  onlyStrings?: boolean,
}