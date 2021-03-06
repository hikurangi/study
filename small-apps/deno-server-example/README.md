# A basic introduction to `deno`
This information comes from [Deno: Getting Started course](https://app.pluralsight.com/library/courses/a226fcad-788f-43d1-9dc5-c39d4a6dd4b8/table-of-contents) on Pluralsight. This repo contains a toy app based on what's explained in this course.

To run this server, [install `deno`](https://deno.land/manual/getting_started/installation) and use:
```bash
deno run --allow-net ./simple_server.ts
```
We need the `--allow-net` flag because `deno` is locked down by its Secure by default approach, detailed above. This flag grants us network access.

## א. I'll bite, what's `deno`?
`deno` is a young runtime (as of early 2021) and essentially is an implementation of [Node.js](https://nodejs.org) with the  [TypeScript](https://www.typescriptlang.org/) compiler built in. It:
- still supports regular Javascript,
- has a (more comprehensive) standard library than other Javascript flavours,
- subsequently reduces the [complexity of the Js development environment](https://changelog.com/jsparty/89) by consolidating the tools necessary,
- is built using [Rust](https://www.rust-lang.org/),
- is 'Secure by default'. There is no access to the filesystem, networking, or environment available unless it is explicitly allowed.

## ב. What's inside that tiny box? Or, what's included in `deno`'s Runtime API?
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
As mentioned before, `deno` runs secure by default. When running a program using `deno`'s runtime API, one can:
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
### How?
The first problem is neatly containing these imports to avoid having a bunch of URLs directly hardcoded in our bizz logic. There are two main strategies we can use here:
1. **Separating dependencies into a `deps.ts` file** or similar. This is the approach being deployed in the current version of the app. It looks like this:
```ts
// deps.ts
export { getDataUrl } from "https://my-remote-url.com/affiliate_data.ts"
export { getThresholdPrice } from "https://my-remote-url.com/pricing_rules.ts"

//  process_affiliate_data.ts
import { getDataUrl, getThresholdPrice } from "./deps.ts"
```
2. **Using an import map**. The Import Map strategy for importing dependencies uses the keys under "imports" in import_map.json. MAGIC 🪄🔮. To actually run the code with the approach below, , we must run `deno` with the `--import-map=path-to-my-import-map.json` and `--unstable` flags. 
```json
// .vscode/settings.json
// To get rid of red squigglies in our main code, help vscode out by referencing the import map.
{
  "deno.enable": true,
  "deno.import_map": "./import_map.json"
}

// import_map.json
{
  "imports": {
    "data_sources": "https://raw.githubusercontent.com/hikurangi/study/main/small-apps/deno-server-example/affiliate_data.ts",
    "prices": "https://raw.githubusercontent.com/hikurangi/study/main/small-apps/deno-server-example/pricing_rules.ts"
  }
}
```
```ts
// process_affiliate_data.ts
import { getDataUrl } from "data_sources"
import { getThresholdPrice } from "prices"
```
### Surely someone can swoop in and switch these modules on us?
This is where we need to rely on the `deno` cache. Usually `deno` caches its data in the operating system's default caching location. We can however manually set `deno`'s cache to b anywhere, for example in our project directory itself.
```bash
export DENO_DIR=. # or set DENO_DIR=. on Windows
```
With this set, `deno` will check the cache for remote modules before searching for them over the wire.
Additionally, we can use the `deno cache` subcommand to download these remote modules at any time. To protect ourselves against any (un)subtle changes that might be made to these modules, we can use the following:
```bash
deno cache --lock=lock.json # set a lockfile named lock.json to freeze dependencies as they currently are.
```
The lockfile created here will store a reference to each module and a hash created from its contents. To allow writing to this cache, add the `--lock-write` option, with the name of the main script file you're using (in this case, `process_affiliate_data.ts`). We want to do this when initialising the cache we are going to lock our dependencies to.

To run from this cache, we will in turn be using something like:
```bash
deno run --allow-net --allow-write --lock=lock.json process_affiliate_data.ts 5
````

To verify this, if I make a change to the module's source code (`pricing_rules.ts` for example), then delete the generated `deps` folder, I will get the following validation error:
```
Download https://my-app-url/affiliate_data.ts
The source code is invalid, as it does not match the expected hash in the lock file.
  Specifier: https://my-app-url/pricing_rules.ts
  Lock file: lock.json
```
The cache was gone, so `deno` had to redownload modules over the wire. These modules did not match the expected hash so they were considered invalid.

### What if someone just deletes the module?
As of this commit, the only way to be safe in this scenario is to check your `deno` cache into source control.

If I am confident in them and I want to update the modules I have, I can just use the `--lock-write` option as above.

Finally, we can also refresh our cache like so:
```bash
deno cache --reload my-program-name-here.ts
```

### Where do I get the modules from?!
1.  [deno.land/x](https://deno.land/x) - their 'official' third party module repository. Check the [info section](https://deno.land/x#info) for more.
2. unpkg.com - this CDN is not specifically designed to work with `deno`, but since `deno` supports js and ts, it should just work.
3. 

## ו. Building a REST API with `deno` and `oak`
See `affiliate_data_server.ts`. Run it with:
```
deno --allow-net --allow-read affiliate_data_server.ts
```

Be sure to run `process_affiliate_data.ts` first in order to have `affiliate_products.json` available for use.

## ז. The `deno` standard library
