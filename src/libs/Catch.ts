import {of, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {print} from "../helpers.ts";


const sub = new Subject();


sub.pipe(
    catchError(err => of('something broke, but we handled it 🕶️')),
    // retry(2)
)
    .subscribe({
        next: val => print(val),
        error: val => console.log(val)
    })

sub.next('good');
sub.error('💥 broken!');

