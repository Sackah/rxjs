import {BehaviorSubject} from "rxjs";
import {print} from "../helpers.ts";

const bs = new BehaviorSubject('Suii');

bs.subscribe(print);

bs.next('Hello');

bs.subscribe(print); // <-- this will print 'Hello' as well