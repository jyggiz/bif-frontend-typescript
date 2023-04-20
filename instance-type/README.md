For a constructor function type `T`, `InstanceType<T>` returns the instance type.

Please implement `MyInstanceType<T>` by yourself.

```
class Foo {}
type A = MyInstanceType<typeof Foo> // Foo
type B = MyInstanceType<() => string> // Error
```
