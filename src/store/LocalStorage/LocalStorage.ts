export interface ILocalStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(Key: string): void;
}

export class LocalStorage implements ILocalStorage{
    private static instance: LocalStorage

    constructor() {
        if(LocalStorage.instance){
            return LocalStorage.instance
        }
        LocalStorage.instance = this
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

