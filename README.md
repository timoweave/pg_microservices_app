# Overview

todo web app using gql.tada to get typescript info from graphql server.

# Stack using gql.tada

1. postgres docker (define SQL tables)
1. postgraphile docker (read postgres, make /graphql and /graphile endpoint)
1. gql.tada/@0no-co/graphqlsp npm (read postgraphil introspection schema and make typescript)
1. react/urql npm, (make query/mutation and present in a webapp)

# Note

This repo pg_microservices_app needed to work with pg_microservices (docker compose up first and add some sql table and columns)
