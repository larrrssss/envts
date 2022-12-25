# ENVts

Typed environment variables

## Install

```sh
npm i envts
```

## Usage

```ts
import envts from 'envts';

type Config = {
  PORT: number,
  DISCORD_BOT_TOKEN: string,
};

const config = envts<Config>();

/**
 * config.PORT 
 * config.DISCORD_BOT_TOKEN
 */
```

## Options

* `config`: Configuration object from `dotenv`
* `forceLoad`: Force load `.env` and ignore cache
* `onlyStrings`: Parse variables as strings
 
```ts
type EnvtsOptions = {
  config?: DotenvConfigOptions,
  forceLoad?: boolean,
  onlyStrings?: boolean,
}
```
