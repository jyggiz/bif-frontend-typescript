When `Function.prototype.bind()` is used, the returned function has a bound this. `OmitThisParameter<T>` could be used to type this.

Please implement `MyOmitThisParameter<T>` by yourself.

```
function foo(this: {a: string}) {}
foo() // Error

const bar = foo.bind({a: 'BFE.dev'})
bar() // OK


type Foo = (this: {a: string}) => string
type Bar = MyOmitThisParameter<Foo> // () => string
```
