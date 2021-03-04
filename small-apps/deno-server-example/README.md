# A simple `deno` server

## A note: what is `deno`?
`deno` is a young runtime (as of early 2021) and essentially is an implementation of [Node.js](https://nodejs.org) with TypeScript syntax.

It:
- has a (more comprehensive) standard library than other Javascript flavours,
- subsequently reduces the [complexity of the Js development environment](https://changelog.com/jsparty/89) by consolidating the tools necessary,
- is built using [Rust](https://www.rust-lang.org/) rather than [V8](https://v8.dev/) in C++,
- is fundamentally 

## The server example
The example I have here comes directly from the [Deno: Getting Started course](https://app.pluralsight.com/library/courses/a226fcad-788f-43d1-9dc5-c39d4a6dd4b8/table-of-contents) on Pluralsight.

To run this server, [install `deno`](https://deno.land/manual/getting_started/installation) and use:
```bash
deno run --allow-net ./simple_server.ts
```
We need the `--allow-net` flag because `deno` is locked down by default given its security-first approach. This flag grants us network access.

For more information, visit [https://deno.land](deno.land) for more information.