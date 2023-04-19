Similar to `Parameters<T>`, `ReturnType<T>`, as the name says itself, returns the return type of function type `T`.

Please implement`MyReturnType<T>` by yourself.

```
type Foo = () => {a: string}

type A = MyReturnType<Foo> // {a: string}
```
