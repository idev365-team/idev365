# Instructions

1. Refactor the `output(..)`, `printIf(..)`, and `isLongEnough(..)` functions to be point-free style.

2. Hints:
	- Some browsers require `console.log(..)` to run against the `console` context , so `x = console.log; x(..)` fails (because of lost `this` binding). Use `console.log.bind(console)` to be safe.

	- `printIf(..)` can be expressed in terms of a `when(..)` that looks like:

	```js
	function when(fn) {
		return function(predicate){
			return function(...args){
				if (predicate(...args)) {
					return fn(...args);
				}
			};
		};
	}
	```

	- `isLongEnough(..)` is the negation of `isShortEnough(..)`.
