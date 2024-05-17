# Overview

A todo web app using gql.tada to get typescript info from graphql server.

# Stack using gql.tada

1. `postgres` docker (define SQL tables)
1. `postgraphile` docker (read postgres, make /graphql and /graphile endpoint)
1. `gql.tada`/`@0no-co/graphqlsp` npm (read postgraphil introspection schema and make typescript)
1. `react`/`urql npm`, (make query/mutation and present in a webapp)

# Setup

This repo pg_microservices_app  needed to work with pg_microservices
1. [pg_microservices](https://github.com/timoweave/pg_microservices.git)
   1. `docker compose up` to get postgresql, postgraphil
   1. `create table ...` to add sql table(s)
1. [pg_microservices_app](https://github.com/timoweave/pg_microservices_app.git)
   1. `npm run dev` to start this app
