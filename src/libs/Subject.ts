import {Subject} from "rxjs";
import {print} from "../helpers.ts";

const subject = new Subject();

subject.subscribe(print);

subject.next('Hello');
subject.next('World');


subject.subscribe(print); // <-- this will not print anything