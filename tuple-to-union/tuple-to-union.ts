type TupleToUnion<T extends any[]> = 
  T extends (infer TupleType)[]
    ? TupleType
    : never;