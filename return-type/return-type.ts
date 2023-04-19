type AnyFunction = (...args: any) => any;

type MyReturnType<T extends AnyFunction> = 
  T extends (...args: any) => infer R
    ? R
    : never;