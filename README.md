# spring-array

Micro library for tweening arrays(or array of arrays). Built-in spring easing.
Useful for animating svg paths.

## Usage

```
import tween from 'spring-array';

const from = [0, 0, [0, 0]];
const to = [1, 1, [1, 1]];

const stopper = tween({
  from,
  to,
  update: (value) => { // Called on every frame with current value }
  done: () => { // Called upon completetion },
  // Spring config (optional, defaults show below)
  deceleration: 0.8,
  tension: 0.8,
  friction: 1
});

stopper(); // will stop the tween
```


## License
MIT Daniel Lundin 2018
