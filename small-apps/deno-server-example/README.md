# A basic introduction to `deno`

## א. I'll bite, what's `deno`?
`deno` is a young runtime (as of early 2021) and essentially is an implementation of [Node.js](https://nodejs.org) with the  [TypeScript](https://www.typescriptlang.org/) compiler built in. It:
- still supports regular Javascript however,
- has a (more comprehensive) standard library than other Javascript flavours,
- subsequently reduces the [complexity of the Js development environment](https://changelog.com/jsparty/89) by consolidating the tools necessary,
- is built using [Rust](https://www.rust-lang.org/) rather than [V8](https://v8.dev/) in C++,
- is 'Secure by default'. There is no access to the filesystem, networking, or environment available unless it is explicitly allowed.

## ב. What's inside that tiny box? or, what's included in `deno`'s Runtime API?
- the [standard Javascript built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).
- Common Web API objects. Not all of the standard ones [as seen on MDN](https://developer.mozilla.org/en-US/docs/Web/API), but `deno`'s website outlines the available subset [here](https://doc.deno.land/https/raw.githubusercontent.com/denoland/deno/master/cli/dts/lib.deno.shared_globals.d.ts).
- `Deno` namespace functionality. Includes tools for filesystem manipulation and other common tasks.
- the [`WebAssembly`](https://webassembly.org/) namespace. Yes, friendo. [You can](https://deno.land/manual/getting_started/webassembly).
- As for the rest? [Knock yourself out](https://doc.deno.land/builtin/stable).

## ג. TypeScript?
As per my previous email, `deno` includes the TypeScript compiler. It also supports regular Javascript. The 'strict' TypesScript settings are generally enabled by default in `deno`. Additionally:

- All imports must be fully qualified with a URL and file extension. We can however reference neighbouring files as in:
```ts
import { cruft } from './my-exceptional-code.ts'
```

- You can supply your own TypeScript configuration to `deno`. We do this by calling it as follows:
```bash
deno run --config ./tsconfig.json ./my-exceptional-code.ts # also the -c flag works
````

- `deno` can be run in watch mode. This is considered unstable.
```bash
deno run --watch --unstable ./my-exceptional-code.ts
```

- You can run `deno` without a mask, just huffing all those microbes in like you desperately want to kill your dear grandma. This disables TypeScript typechecking which speeds up compilation in watch mode. Probs only do this if you're using a good TypeScript aware editor that supports you with its own typechecking for example, vscode. Just use vscode already.
```bash
deno run --watch --no-check ./my-exceptional-code.ts
```

## ד. `deno` Runtime Permissions
When running a program using `deno`'s runtime API, one can:
- Enable all permissions:
```bash
deno run --allow-all program.ts
```
- Allow network access only:
```bash
deno run --allow-network program.ts
```
- Allow network access to a comma-separated list of domains:
```bash
deno run --allow-network=ice.gov,breitbart.com a-totally-innocuous-and-very-safe-script.ts
```
- Allow filesystem writes to a comma-separated list of locations:
```bash
deno run --allow-write=. program.ts
```

## ה. Using External Modules


## ג. The server example
The example in the neighbouring `simple_server.ts` file comes directly from the [Deno: Getting Started course](https://app.pluralsight.com/library/courses/a226fcad-788f-43d1-9dc5-c39d4a6dd4b8/table-of-contents) on Pluralsight.

To run this server, [install `deno`](https://deno.land/manual/getting_started/installation) and use:
```bash
deno run --allow-net ./simple_server.ts
```
We need the `--allow-net` flag because `deno` is locked down by its Secure by default approach, detailed above. This flag grants us network access.

For more information, visit [https://deno.land](deno.land) for more information.