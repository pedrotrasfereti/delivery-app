class LocalStorageMock {
  constructor() {
    this.store = {
      user: {
        name: 'John Doe',
      },
    };
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

export default LocalStorageMock;
