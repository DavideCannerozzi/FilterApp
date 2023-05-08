useMemo is used to memoize a value (the result of the expensive computation), not a function

React component faster because it doesn't have to create a new function every time it re-renders
For example, if you need to pass a callback function to a child component, you can use useCallback to remember the function so you don't have to create a new one every time the component re-renders

// api data -> data .then((json) => setData(json))

// input -> value <input type="text" onChange={(e) => e.target.value} />

// filter data based on the value

// check
