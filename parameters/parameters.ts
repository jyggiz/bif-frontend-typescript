type AnyFunction = (...args: any) => any;

type MyParameters<T extends AnyFunction> = 
  T extends (...args: infer P) => any
    ? P
    : never;