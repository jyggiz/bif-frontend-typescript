type FirstChar<T extends string> = 
  T extends `${infer FirstCharType}${string}`
    ? FirstCharType
    : never;