import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

// eslint-disable-next-line react-refresh/only-export-components
export const client = new Client({
    url: '/postgraphile/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
});

export function UrqlProvider(props: React.PropsWithChildren) {
    const { children } = props;
    return (
        <Provider value={client}>
            <>{children}</>
        </Provider>
    );
}
