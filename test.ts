type Test<T> = T extends string ? string : never

type A = Test<string | number> //string
type B = Test<string> | Test<number> // string
type C = Test<string & number> // never
type D = Test<string> & Test<number> //never
// A = B 