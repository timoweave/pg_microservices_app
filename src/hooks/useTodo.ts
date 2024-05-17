import { graphql } from 'gql.tada';
import { useCallback, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'urql';

export const todoListQuery = graphql(`
    query todoListQuery {
        allTodos(orderBy: CREATED_AT_DESC) {
            nodes {
                id
                title
                isDone
                createdAt
            }
        }
    }
`);

// export type Todo = (typeof todoListQuery)['allTodos']['nodes'][0];

export const createTodoMutation = graphql(`
    mutation createTodo($title: String) {
        createTodo(input: { todo: { title: $title } }) {
            todo {
                id
            }
        }
    }
`);

export function useGQLTodo() {
    const [todoResponse] = useQuery({ query: todoListQuery, variables: {} });
    const [createTodoResponse, createTodo] = useMutation(createTodoMutation);

    const isFetching = useMemo(
        () => todoResponse.fetching || createTodoResponse.fetching,
        [createTodoResponse.fetching, todoResponse.fetching],
    );

    const hasError = useMemo(
        () => todoResponse.error || createTodoResponse.error,
        [createTodoResponse.error, todoResponse.error],
    );

    if (todoResponse.fetching) {
        console.error(`fetching todo in progress...`);
        // throw new Error(`fetching todo in progress...`);
    }
    if (createTodoResponse.fetching) {
        console.error(`mutating todo in progress...`);
        // throw new Error(`mutating todo in progress...`);
    }

    if (todoResponse.error) {
        console.error(`fetching todo has error...`);
        // throw new Error(`fetching todo error...`);
    }

    if (createTodoResponse.error) {
        console.error(`mutating todo has error...`);
        // throw new Error(`mutating todo error...`);
    }

    // const node = todoResponse.data?.allTodos?.nodes?.[0];
    // type Todo = NonNullable<typeof node>;

    return {
        todoResponse,
        createTodoResponse,
        createTodo,
        isFetching,
        hasError,
    };
}

export function useInputValue() {
    const [value, setValue] = useState<string>('');

    const hasValue = useMemo(() => value != null && value !== '', [value]);

    const changeValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        },
        [],
    );

    const resetValue = useCallback(() => {
        setValue('');
    }, []);

    return { value, hasValue, changeValue, resetValue };
}

export function useSaveTodo(
    todo: ReturnType<typeof useGQLTodo>,
    title: ReturnType<typeof useInputValue>,
) {
    const saveTodo = useCallback(
        async (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (title.value == null || title.value === '') {
                console.error('input for title is empty');
                return;
            }

            const response = await todo.createTodo({ title: title.value });
            if (response.error == null) {
                title.resetValue();
            } else {
                // throw new Error(response.error.message);
                console.error(response.error.message);
            }
        },
        [title, todo],
    );
    return saveTodo;
}
