type AnyFunction = (...args: any) => any;

type MyOmitThisParameter<T extends AnyFunction> = 
  T extends (this: any, ...args: infer Parameters) => infer ReturnType
	  ? (...args: Parameters) => ReturnType
	  : never;