import { nanoid } from 'nanoid';
import { greeter } from './utils/greeter.js';

console.log(await greeter('test ' + nanoid()));
