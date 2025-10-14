# structs

Basic data structures for working in the JS environment.

## Build & package notes

- Run `npm run build` to compile TypeScript into `dist/` (emits JS and declaration files).
- The package `files` field includes only `dist/`, so tests and `lib/` source are not published.
- `types` points to `dist/index.d.ts` and `main`/`exports` point to `dist/index.js` to support consumers and future submodules.

## Publishing

When publishing, only `dist/` is included in the package. Keep tests and dev files out of the published bundle.
