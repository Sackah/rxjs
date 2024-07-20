import {Observable} from "rxjs";


const cold = new Observable(subscriber => {
    subscriber.next(Math.floor(Math.random() * 100));
})

// cold.subscribe(print);
// cold.subscribe(print);

// const hot = cold.pipe(shareReplay(1));
// hot.subscribe(print);
// hot.subscribe(print);