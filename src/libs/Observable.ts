import {Observable} from "rxjs";

const stream$ = new Observable(subscriber => {
    subscriber.next('A');
    subscriber.next('B');
    subscriber.complete();
    subscriber.next('C');
});

// stream$.subscribe(print);

// const hello = of('Hello');
// hello.subscribe(print);

// const world = from('World');
// world.subscribe(print);

// const event = fromEvent(document, 'click');
// event.subscribe(console.log);

// const periodic = interval(1000);
// periodic.subscribe(console.log);

// const world = scheduled([of('Hello')], asyncScheduler);
// const hello = of('World');
// hello.subscribe(v => {
//     print(v);
//     console.log(v);
// });
// world.subscribe(v => {
//     v.subscribe(v => {
//         print(v);
//         console.log(v);
//     });
// });