/*
If localStorage is not available, then flash a message and let them know that they can get a better experience
if they allow localStorage.

Basic interface is based off:
https://blog.herodevs.com/interact-with-browser-storage-type-safe-fee0ad07428f
 */

// Check if localStorage is available
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
interface iStorageService {
    get(key: string, defaultValue?: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
    clear(): void;
}

class StorageShim {
  constructor(private hash: Record<string, string> = {}) {}
  getItem = (key: string): string | null => this.hash[key];
  setItem = (key: string, value: any) => (this.hash[key] = value);
  removeItem = (key: string) => delete this.hash[key];
  clear = () => (this.hash = {});
}

class StorageService implements iStorageService {
    protected readonly namespace: string;
    protected readonly storage: Storage | StorageShim;
    constructor(namespace: string = "BLOCKPY_SERVER_") {
        this.namespace = namespace;
        try {
            this.storage = window.localStorage;
            this.set("TEST", "TEST");
            this.remove("TEST");
        } catch (e) {
            this.storage = new StorageShim();
            console.error("localStorage is not available. Please enable localStorage to get full functionality.");
        }
    }

    set(key: string, value: string): void {
        this.storage.setItem(this.namespace+key, value);
    }

    get(key: string, defaultValue?: string): string | null {
        const result = this.storage.getItem(this.namespace+key);
        if (result === null) {
            return defaultValue || null;
        }
        return result;
    }

    remove(key: string): void {
        this.storage.removeItem(this.namespace+key);
    }

    clear(): void {
        this.storage.clear();
    }
}

export const STORAGE_SERVICE = new StorageService();