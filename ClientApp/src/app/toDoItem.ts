export class toDoItem {
    id: number;
    shortDescription: string;
    longDesription: string;

    constructor(short: string, long: string) {
        this.shortDescription = short;
        this.longDesription = long;
    }
}