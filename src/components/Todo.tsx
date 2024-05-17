import { useGQLTodo, useInputValue, useSaveTodo } from '../hooks/useTodo';

export function TodoInput() {
    const title = useInputValue();
    const todoGraphQL = useGQLTodo();
    const saveTodo = useSaveTodo(todoGraphQL, title);

    return (
        <div className="grid grid-cols-[5fr_1fr] gap-4">
            <input
                type="text"
                id="todo_title"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="enter todo title"
                value={title.value}
                onChange={title.changeValue}
                required
            />
            <button
                onClick={saveTodo}
                disabled={!title.hasValue}
                className="rounded-md bg-blue-500 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300"
            >
                save
            </button>
        </div>
    );
}

export function TodoListViewer() {
    const todoGraphQL = useGQLTodo();

    return (
        <div className="grid grid-cols-12 gap-4">
            {todoGraphQL.todoResponse.data?.allTodos?.nodes
                ?.filter((n) => n != null)
                ?.map((node, index: number) => {
                    if (node == null) {
                        return null;
                    }

                    const { id, title, isDone } = node!;
                    const createdAt = node.createdAt as string;
                    const date = new Date(createdAt).toDateString();
                    return (
                        <div
                            className="col-span-full grid grid-cols-subgrid"
                            key={`${id ?? index}`}
                        >
                            <span className="me-2 w-[12ch] truncate rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                {`${id}`}
                            </span>
                            <span className="col-span-6 me-2 rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400">
                                {title}
                            </span>
                            <div className="col-span-2 text-center">{date}</div>
                            <div>
                                {isDone ? (
                                    <span className="me-2 rounded border border-green-400 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400">
                                        done
                                    </span>
                                ) : (
                                    <span className="me-2 rounded border border-red-400 bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-gray-700 dark:text-red-400">
                                        incomplete
                                    </span>
                                )}
                            </div>
                            <button className="rounded-md bg-blue-500 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300">
                                done
                            </button>
                            <button className="rounded-md bg-red-500 text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-300">
                                delete
                            </button>
                        </div>
                    );
                })}
        </div>
    );
}

export function TodoList() {
    return (
        <div className="m-4 grid gap-4">
            <TodoInput />
            <TodoListViewer />
        </div>
    );
}
