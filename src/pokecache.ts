export type CacheEntry<T> = {
  createdAt: number;
  val: T;
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, value: T) {
    let newCache: CacheEntry<T> = {
      createdAt: Date.now(),
      val: value
    };
    this.#cache.set(key, newCache);
  }

  get<T>(param: string): T | undefined {
    const cache = this.#cache.get(param);

    return cache?.val;
  }

  #reap() {
    const now = Date.now();

    for (const [key, entry] of this.#cache.entries()) {
      if (entry.createdAt < now - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    if (this.#reapIntervalId) {
      return;
    }

    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
