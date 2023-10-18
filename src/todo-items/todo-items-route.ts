import {MethodEnum} from "../helpers/method-enum";
import {create, getAll} from "./todo-items-service";

export function todoItemsRoute(res, method: MethodEnum, data: any = null) {

    if (data) data = JSON.parse(data)

    switch (method) {
        case MethodEnum.GET:
            return getAll()
        case MethodEnum.POST:
            res.statusCode = 201;
            return create(data)
    }
}