import { describe, expectTypeOf, test } from 'vitest';
import { DateTimeType } from '../utils/graphql';

describe('DateTime', () => {
    test('DateTime type should be defined from gql.tada', () => {
        /*
            const todo = readFragment(TodoFragment, data);

            const { id, title, isDone, createdAt } = todo;
            if (typeof createdAt !== 'string') {
                console.error('todo.createdAt is not string');
            }
            const date = new Date(createdAt as DateTimeType).toDateString();
                //                    ^? = unknown ? from typescript ?, but
                //                    but never console.error('todo.createdAt is not string');
        */
        expectTypeOf<DateTimeType>().toEqualTypeOf<string>();
    });
});
