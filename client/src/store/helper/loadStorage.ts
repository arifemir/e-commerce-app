function loadStorage<T> (item: string): T | null {
  const localStorageItem = localStorage.getItem(item);
  if(!localStorageItem) return null
  else {
    const data: T = JSON.parse(localStorageItem)
    return data
  }
}

export {
  loadStorage
};