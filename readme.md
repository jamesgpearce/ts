# TS libraries

I run all code with [Bun](https://bun.sh).

Need to setup a nice way to export things inside [lib](lib) folder to NPM.

## Develop

All library code is found in [lib](lib). All code that I'm trying out is in [try](try) folder.

I also use [run.ts](run.ts) file as a quick way to run some code and see output of it.

```
bun run.ts
```

Or for better DX, I use [watchexec](https://watchexec.github.io/) command and run:

`watchexec --restart --exts ts "tput reset && bun run.ts" --project-origin .`

This will rerun [run.ts](run.ts) file if any of the .ts files change. Makes for nice experience developing. Swap `run.ts` for a file you want to run.

## Deno

I also am [exploring using Deno](https://github.com/nikitavoloboev/deno) as it has some interesting ideas/libraries.

## Discuss / help

Search for [existing issues](../../issues) or open [new one](../../issues/new/choose).

## Thank you

You can support me on [GitHub](https://github.com/sponsors/nikitavoloboev) or look into [other projects](https://nikiv.dev/projects) I shared.

I also have [personal Discord](https://discord.com/invite/TVafwaD23d) you can join for more indepth discussions.

[![MIT](http://bit.ly/mitbadge)](https://choosealicense.com/licenses/mit/) [![Twitter](http://bit.ly/nikitatweet)](https://twitter.com/nikitavoloboev)
