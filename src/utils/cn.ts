export const cn = (...args: unknown[]) =>
  args.filter((arg): arg is string => typeof arg === 'string').join(' ')
