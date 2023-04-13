type MyRecord<K extends number | string | symbol, V> = {
  [P in K]: V;
};