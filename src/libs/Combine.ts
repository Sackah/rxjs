import {combineLatest, delay, merge, Observable} from "rxjs";
import {print} from "../helpers.ts";


const randoAsync = new Observable(subscriber => {
    subscriber.next(Math.floor(Math.random() * 100));
})

const delayed = randoAsync.pipe(
    delay(1000)
)

const combo = combineLatest([
    delayed,
    randoAsync,
    randoAsync,
    randoAsync
])

// combo.subscribe(console.log) // <-- will wait for all observables to emit at least once before emitting an array of values

const merged = merge([
    delayed,
    randoAsync,
    randoAsync,
    randoAsync
])

merged.subscribe(v =>
    v.subscribe(print)
) // <-- will emit values as they come in