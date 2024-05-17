/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: {
    'Boolean': unknown;
    'CreateTodoInput': { kind: 'INPUT_OBJECT'; name: 'CreateTodoInput'; isOneOf: false; inputFields: [{ name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'todo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'TodoInput'; ofType: null; }; }; defaultValue: null }]; };
    'CreateTodoPayload': { kind: 'OBJECT'; name: 'CreateTodoPayload'; fields: { 'clientMutationId': { name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'query': { name: 'query'; type: { kind: 'OBJECT'; name: 'Query'; ofType: null; } }; 'todo': { name: 'todo'; type: { kind: 'OBJECT'; name: 'Todo'; ofType: null; } }; 'todoEdge': { name: 'todoEdge'; type: { kind: 'OBJECT'; name: 'TodosEdge'; ofType: null; } }; }; };
    'Cursor': unknown;
    'Datetime': unknown;
    'DeleteTodoByIdInput': { kind: 'INPUT_OBJECT'; name: 'DeleteTodoByIdInput'; isOneOf: false; inputFields: [{ name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'UUID'; ofType: null; }; }; defaultValue: null }]; };
    'DeleteTodoInput': { kind: 'INPUT_OBJECT'; name: 'DeleteTodoInput'; isOneOf: false; inputFields: [{ name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'nodeId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'DeleteTodoPayload': { kind: 'OBJECT'; name: 'DeleteTodoPayload'; fields: { 'clientMutationId': { name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'deletedTodoId': { name: 'deletedTodoId'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'query': { name: 'query'; type: { kind: 'OBJECT'; name: 'Query'; ofType: null; } }; 'todo': { name: 'todo'; type: { kind: 'OBJECT'; name: 'Todo'; ofType: null; } }; 'todoEdge': { name: 'todoEdge'; type: { kind: 'OBJECT'; name: 'TodosEdge'; ofType: null; } }; }; };
    'ID': unknown;
    'Int': unknown;
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'createTodo': { name: 'createTodo'; type: { kind: 'OBJECT'; name: 'CreateTodoPayload'; ofType: null; } }; 'deleteTodo': { name: 'deleteTodo'; type: { kind: 'OBJECT'; name: 'DeleteTodoPayload'; ofType: null; } }; 'deleteTodoById': { name: 'deleteTodoById'; type: { kind: 'OBJECT'; name: 'DeleteTodoPayload'; ofType: null; } }; 'updateTodo': { name: 'updateTodo'; type: { kind: 'OBJECT'; name: 'UpdateTodoPayload'; ofType: null; } }; 'updateTodoById': { name: 'updateTodoById'; type: { kind: 'OBJECT'; name: 'UpdateTodoPayload'; ofType: null; } }; }; };
    'Node': { kind: 'INTERFACE'; name: 'Node'; fields: { 'nodeId': { name: 'nodeId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; }; possibleTypes: 'Query' | 'Todo'; };
    'PageInfo': { kind: 'OBJECT'; name: 'PageInfo'; fields: { 'endCursor': { name: 'endCursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; 'hasNextPage': { name: 'hasNextPage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'hasPreviousPage': { name: 'hasPreviousPage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'startCursor': { name: 'startCursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'allTodos': { name: 'allTodos'; type: { kind: 'OBJECT'; name: 'TodosConnection'; ofType: null; } }; 'node': { name: 'node'; type: { kind: 'INTERFACE'; name: 'Node'; ofType: null; } }; 'nodeId': { name: 'nodeId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'query': { name: 'query'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Query'; ofType: null; }; } }; 'todo': { name: 'todo'; type: { kind: 'OBJECT'; name: 'Todo'; ofType: null; } }; 'todoById': { name: 'todoById'; type: { kind: 'OBJECT'; name: 'Todo'; ofType: null; } }; }; };
    'String': unknown;
    'Todo': { kind: 'OBJECT'; name: 'Todo'; fields: { 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'Datetime'; ofType: null; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'UUID'; ofType: null; }; } }; 'isDone': { name: 'isDone'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; 'nodeId': { name: 'nodeId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'TodoCondition': { kind: 'INPUT_OBJECT'; name: 'TodoCondition'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'UUID'; ofType: null; }; defaultValue: null }, { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'isDone'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }, { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'Datetime'; ofType: null; }; defaultValue: null }]; };
    'TodoInput': { kind: 'INPUT_OBJECT'; name: 'TodoInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'UUID'; ofType: null; }; defaultValue: null }, { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'isDone'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }, { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'Datetime'; ofType: null; }; defaultValue: null }]; };
    'TodoPatch': { kind: 'INPUT_OBJECT'; name: 'TodoPatch'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'UUID'; ofType: null; }; defaultValue: null }, { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'isDone'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }, { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'Datetime'; ofType: null; }; defaultValue: null }]; };
    'TodosConnection': { kind: 'OBJECT'; name: 'TodosConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'TodosEdge'; ofType: null; }; }; }; } }; 'nodes': { name: 'nodes'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Todo'; ofType: null; }; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'PageInfo'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; }; };
    'TodosEdge': { kind: 'OBJECT'; name: 'TodosEdge'; fields: { 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'Todo'; ofType: null; } }; }; };
    'TodosOrderBy': { name: 'TodosOrderBy'; enumValues: 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'TITLE_ASC' | 'TITLE_DESC' | 'IS_DONE_ASC' | 'IS_DONE_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'; };
    'UUID': unknown;
    'UpdateTodoByIdInput': { kind: 'INPUT_OBJECT'; name: 'UpdateTodoByIdInput'; isOneOf: false; inputFields: [{ name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'todoPatch'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'TodoPatch'; ofType: null; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'UUID'; ofType: null; }; }; defaultValue: null }]; };
    'UpdateTodoInput': { kind: 'INPUT_OBJECT'; name: 'UpdateTodoInput'; isOneOf: false; inputFields: [{ name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'nodeId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'todoPatch'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'TodoPatch'; ofType: null; }; }; defaultValue: null }]; };
    'UpdateTodoPayload': { kind: 'OBJECT'; name: 'UpdateTodoPayload'; fields: { 'clientMutationId': { name: 'clientMutationId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'query': { name: 'query'; type: { kind: 'OBJECT'; name: 'Query'; ofType: null; } }; 'todo': { name: 'todo'; type: { kind: 'OBJECT'; name: 'Todo'; ofType: null; } }; 'todoEdge': { name: 'todoEdge'; type: { kind: 'OBJECT'; name: 'TodosEdge'; ofType: null; } }; }; };
  };
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}