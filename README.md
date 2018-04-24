# spring-array

Micro library for tweening arrays(or array of arrays). Built-in spring easing.
Useful for animation svg paths.

## Usage

```
import tween from 'spring-array';

const from = [0, 0, [0, 0]];
const to = [1, 1, [1, 1]];

tween({
  from,
  to,
  update: (value) => { // Called on every frame with current value }
  done: () => { // Called upon completetion },
  easer: (i) => i, // Optional custom easing function
  // Spring config (optional, defaults show below)
  deceleration: 0.8,
  tension: 0.8,
  friction: 1
});
```

## License
MIT Daniel Lundin 2018
