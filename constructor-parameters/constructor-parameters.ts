type AnyConstructor = new (...args: any) => any;

type MyConstructorParameters<T extends AnyConstructor> = 
  T extends new (...args: infer P) => any
    ? P
    : never;