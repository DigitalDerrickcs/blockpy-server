import * as ko from 'knockout';

/**
 * A generic class that maintains an observable array and a record map
 * for efficient lookup by a unique key.
 */
export class ObservableRecordList<T extends Record<string, any>> {
    private keyField: keyof T;
    private map: Record<string, ko.Observable<T>>;
    public items: ko.ObservableArray<ko.Observable<T>>;

    constructor(keyField: keyof T, initialData: T[] = []) {
        this.keyField = keyField;
        this.items = ko.observableArray([]);
        this.rebuildMap();
    }

    private rebuildMap() {
        this.map = {};
        this.items().forEach(item => {
            const key = item()[this.keyField];
            if (key !== undefined) {
                this.map[String(key)] = item;
            }
        });
    }

    setAll(items: T[]) {
        this.items(items.map(item => ko.observable(item)));
        this.rebuildMap();
    }

    /** Adds or replaces an item based on its key */
    add(item: T) {
        const key = item[this.keyField];
        const keyStr = String(key);
        if (this.map[keyStr]) {
            this.map[keyStr](item); // Update the existing observable
        } else {
            const observableItem = ko.observable(item);
            this.items.push(observableItem);
            this.map[keyStr] = observableItem;
        }
    }

    has(key: string) {
        return key in this.map;
    }

    /** Removes an item by its key */
    removeByKey(key: string | number) {
        const keyStr = String(key);
        const observableItem = this.map[keyStr];
        if (observableItem) {
            this.items.remove(observableItem);
            delete this.map[keyStr];
        }
    }

    load(key: string | number): ko.Observable<T> {
        if (!this.map[key]) {
            const newItem = ko.observable({} as T);
            this.items.push(newItem);
            this.map[key] = newItem;
        }
        return this.map[key];
    }

    /** Gets the observable item by key (or undefined) */
    get(key: string | number): ko.Observable<T> | undefined {
        return this.map[String(key)];
    }

    /** Gets the raw value (not observable) */
    getValue(key: string | number): T | undefined {
        const obs = this.get(key);
        return obs ? obs() : undefined;
    }

    /** Returns all current values as plain objects */
    getAllValues(): T[] {
        return this.items().map(obs => obs());
    }

    /** Clears the list */
    clear() {
        this.items.removeAll();
        this.map = {};
    }
}