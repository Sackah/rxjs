import {bufferCount, fromEvent} from "rxjs";

const event = fromEvent(document, "mousemove");
// const debounced = event.pipe(
//     debounceTime(1000)
// )
// const throttled = event.pipe(
//     throttleTime(1000)
// )
const buffered = event.pipe(
    bufferCount(20)
)

event.subscribe(_ => console.log('suii'));
// debounced.subscribe(_ => console.log('debounced')); // <-- delayed until a second has passed
// throttled.subscribe(_ => console.log('throttled')); // <-- first event taken and rest delayed after every second
buffered.subscribe(_ => console.log('buffered')); // <-- keeps all previous values and emits after 20 values are collected
