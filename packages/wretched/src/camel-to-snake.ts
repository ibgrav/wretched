const snakeCaseCache: Map<string, string> = new Map();

export const camelToSnakeCase = (value: string) => {
  const cached = snakeCaseCache.get(value);
  if (cached) return cached;

  const length = value.length;

  let result = "";

  for (let i = 0; i < length; i++) {
    const lower = value[i]!.toLowerCase();
    if (value[i] !== lower) result += `${i === 0 ? "" : "-"}${lower}`;
    else result += value[i];
  }

  snakeCaseCache.set(value, result);

  return result;
};
