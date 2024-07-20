import {of, switchMap} from "rxjs";
import {print} from "../helpers.ts";


const user$ = of({name: 'Bob', uuId: crypto.randomUUID()});

const fetchOrders = (uuId: string) => {
    return of(`Orders for user with UUID: ${uuId}`);
}

const orders$ = user$.pipe(
    switchMap(u => fetchOrders(u.uuId))
);

orders$.subscribe(print)