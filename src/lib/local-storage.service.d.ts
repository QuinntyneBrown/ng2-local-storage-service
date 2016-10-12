export declare class LocalStorageService {
    constructor();
    private static _instance;
    static id: string;
    static readonly Instance: LocalStorageService;
    private _items;
    items: Array<any>;
    get: (options: {
        name: string;
    }) => any;
    put: (options: any) => void;
    clear: () => void;
}
