import { initGraphQLTada } from 'gql.tada';
import type { introspection } from './graphql_introspection.d.ts';

export const graphql = initGraphQLTada<{
    introspection: introspection;
    scalars: {
        DateTime: string;
        Boolean: boolean;
        Int: number;
        String: string;
        UUID: string;
        ID: string;
        // Cursor: number;
    };
}>();

export { readFragment } from 'gql.tada';
export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';

export type ID = ReturnType<typeof graphql.scalar<'ID'>>;

export type DateTimeType = ReturnType<typeof graphql.scalar<'DateTime'>>;
