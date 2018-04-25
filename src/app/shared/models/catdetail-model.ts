export class CatDetails {
    name: string;
    gender: string;
    age: number;
    color: string;
    description: string;
    profileImg: string;
    createDate: Date;

    constructor () {
        this.createDate = new Date();
    }
}
