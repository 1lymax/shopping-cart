export interface ILocalStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(Key: string): void;
}

export class Localstorage implements ILocalStorage{
    private static instance: Localstorage

    constructor() {
        if(Localstorage.instance){
            return Localstorage.instance
        }
        Localstorage.instance = this
    }

    public getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key)
    }

    public setItem(key: string, value: string): void {
        localStorage.setItem(key, value)
    }

}

