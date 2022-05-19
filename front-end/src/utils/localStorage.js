export default class LocalStorageMethods {
  static getItem(item) {
    const localItem = localStorage.getItem(item);
    return localItem;
  }

  static getParsedItem(item) {
    const localItem = localStorage.getItem(item);
    const parsedItem = JSON.parse(localItem);
    return parsedItem;
  }

  static setItem(key, payload) {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  static parseItem(payload) {
    const parse = JSON.parse(payload);
    return parse;
  }

  static deleteItem(key) {
    localStorage.removeItem(key);
  }
}
