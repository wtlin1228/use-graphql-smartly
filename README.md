# Use Graphql Smartly

- Start GraphQL Server: `npx nx serve apollo-server`
- Start Client Default: `npx nx serve client-default`
- Generate type manually: `npx nx codegen client-default` (make sure your server is running)
- Generate type in watch mode: `npx nx codegen client-default --watch`

If you want to start a new client project to try something, just run:

`npx nx generate @use-graphql-smartly/codegen:react-graphql-client <name_for_your_new_client_project>`
