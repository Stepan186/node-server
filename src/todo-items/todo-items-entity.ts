import {ITodoItem} from "./helpers/todo-item.interface";

let lastId: number = 2;

export function getId() {
    return ++lastId;
}

export const todoItems: ITodoItem[] = [
    {
        id: 1,
        text: 'task 1',
        isDone: false
    },
    {
        id: 2,
        text: 'task 2',
        isDone: true
    }
]