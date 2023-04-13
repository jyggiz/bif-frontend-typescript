type MyExclude<T, K> = T extends K ? never : T;

type Key = string | number | symbol;

type MyOmit<T, K extends Key> = {
  [P in Exclude<keyof T, K>]: T[P];
};