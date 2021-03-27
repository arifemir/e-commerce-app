function loadStorage<T>(item: string): T | undefined {
  const localStorageItem = localStorage.getItem(item);
  if (!localStorageItem) return undefined;
  return JSON.parse(localStorageItem);
}

export { loadStorage };
