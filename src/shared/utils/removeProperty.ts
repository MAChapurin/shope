export function removePropertyAndReturn<T extends object, K extends keyof T>(
  obj: T,
  property: K
): T {
  const newObj = { ...obj };
  delete newObj[property];
  return newObj;
}