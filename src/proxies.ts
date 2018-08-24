const iterationProxy: {
  [functionName: string]: (
    // functionName: K, where K in keysof T, and T extends { [key: K]: (bp:BoundParamsT) => U }
    ...boundParams: any[]
  ) => <T, U>(e: T, i: number, es: T[]) => U;
} = new Proxy(
  {},
  {
    get(target, key) {
      return (...boundParams: any[]) =>
        function iteratorFunction(item: any, index: number, array: any[]) {
          return item[key](...boundParams);
        };
    }
  }
);

export const thing = iterationProxy;
export const it = iterationProxy;

type SNS = string | number | symbol;

type IterationProxy<
  E extends { [Ks in K]: (a: A) => R },
  K extends keyof E,
  A,
  R
> = { [Ks in K]: IterationStandIn<E, A, R> };

type IterationStandIn<E, A, R> = (
  a: A
) => (element: E, index: number, array: E[]) => R;

let _: IterationProxy<A, B, C, D> = null as any;

[1, 2, 3].map(_.toPrecision());
