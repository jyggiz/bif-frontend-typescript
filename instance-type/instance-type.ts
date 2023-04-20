type AnyConstructor = new (...args: any) => any;

type MyInstanceType<T extends AnyConstructor> = 
  T extends new (...args: any) => infer InstanceType
    ? InstanceType
    : never;