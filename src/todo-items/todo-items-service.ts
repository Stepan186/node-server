import {ITodoItem} from "./helpers/todo-item.interface";
import {getId, todoItems} from "./todo-items-entity";

export function getAll(): ITodoItem[] {
    return todoItems;
}

export function create(data: Omit<ITodoItem, 'id'>) {
    const todoItem: ITodoItem = {
        id: getId(),
        ...data,
    }
    todoItems.push(todoItem);
}

