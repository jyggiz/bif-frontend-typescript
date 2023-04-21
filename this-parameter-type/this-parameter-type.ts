type AnyFunction = (...args: any) => any;

type MyThisParameterType<T extends AnyFunction> = 
  T extends (this: infer ThisType, ...args: any) => any
    ? ThisType
    : unknown;