import {map, of, tap} from "rxjs";
import {print} from "../helpers.ts";

// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//
// const modified = source.pipe(
//     map(v => Math.pow(v, 2)),
//     scan((acc, v) => acc + v, 0),
//     filter(v => v > 20),
//     take(3)
// );
//
// modified.subscribe(print);

const source = of('Ishowspeedsuii');

const tapped = source.pipe(
    tap(print),
    map(v => v.toUpperCase()),
    tap(print),
    map(v => `Hello 🐟 ${v}`),
    tap(async v => {
        await Promise.resolve();
        alert(v);
    })
);

tapped.subscribe();