As the opposite of `Exclude<T, K>`, `Extract<T, U>` returns a type by extracting union members from `T` that are assignable to `U`.

Please implement `MyExtract<T, U>` by yourself.

```
type Foo = 'a' | 'b' | 'c'

type A = MyExtract<Foo, 'a'> // 'a'
type B = MyExtract<Foo, 'a' | 'b'> // 'a' | 'b'
type C = MyExtract<Foo, 'b' | 'c' | 'd' | 'e'>  // 'b' | 'c'
type D = MyExtract<Foo, never>  // never
```
