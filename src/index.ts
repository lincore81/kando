import './style.css';
import { Maybe } from 'purify-ts';

document.body.innerHTML = 
    `<p>Hello Typescript!</p>`

const f = (x: number) => x > 0? Maybe.of(x) : Maybe.empty();

console.log(f(43).orDefault(42));