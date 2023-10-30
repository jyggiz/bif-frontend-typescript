Given a tuple type, implement `TupleToUnion<T>` to get a union type from it.

```
type Foo = [string, number, boolean]

type Bar = TupleToUnion<Foo> // string | number | boolean
```
