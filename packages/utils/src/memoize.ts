type RestFunction<T extends unknown[], R> = (...args: T) => R
type MemoizeResult<T extends unknown[], R> = RestFunction<T, R> & {
  cache: Map<string, R>
}

function defaultResolver<T>(...args: T[]) {
  return JSON.stringify(args)
}

export default function memoize<T extends unknown[], R>(
  func: RestFunction<T, R>,
  resolver?: RestFunction<T, string>
): MemoizeResult<T, R> {
  if (
    typeof func != 'function' ||
    (resolver != null && typeof resolver != 'function')
  ) {
    throw new TypeError('Expected a function')
  }

  const memoized = (...args: T) => {
    const curResolver = resolver ?? defaultResolver
    const key = curResolver(...args)
    const cache = memoized.cache

    if (!cache.has(key)) {
      cache.set(key, func(...args))
    }

    return cache.get(key) as R
  }

  memoized.cache = new Map<string, R>()

  return memoized
}
