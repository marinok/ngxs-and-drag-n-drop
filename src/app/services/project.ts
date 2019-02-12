export class Project {
    name: string;
    owner: string;
    size: number;

    constructor(name?: string, owner?: string, size?: number) {
        this.name = name;
        this.owner = owner;
        this.size = size;
    }
}
