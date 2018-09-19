import LocalForageStorage from './LocalForageStorage';

class SDKStorageCache {
  constructor({
    prefix = 'rc-sdk',
  }) {
    this._storage = new LocalForageStorage({ storageKey: prefix });
    this._data = {};
  }

  async initialize() {
    this._data = await this._storage.getData();
    this._storage.on('storage', ({ key, value }) => {
      this._data[key] = value;
    });
  }

  getItem(key) {
    return this._data[key];
  }

  async setItem(key, value) {
    this._data[key] = value;
    await this._storage.setItem(key, value);
  }

  async removeItem(key) {
    delete this._data[key];
    await this._storage.removeItem(key);
  }

  async clean() {
    await Promise.all(
      Object.keys(this._data).map(key => this.removeItem(key))
    );
  }
}

export default async function createSDKStorage({ prefix }) {
  const sdkStorage = new SDKStorageCache({ prefix });
  await sdkStorage.initialize();
  const proxyStorage = new Proxy(sdkStorage, {
    get(target, name) {
      if (!(name in target)) {
        return target.getItem(name);
      }
      return target[name];
    },
    set(target, name, newval) {
      if (!(name in target)) {
        target.setItem(name, newval);
      }
      target[name] = newval;
    },
    deleteProperty(target, name) {
      if (name in target) {
        return;
      }
      target.removeItem();
    }
  });
  return proxyStorage;
}
