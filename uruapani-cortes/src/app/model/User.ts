class User {
    userName:string;
    token:string;
    role: string[];
    img: string;

    constructor(userName:string,
        token:string,
        role: string[],
        img: string){
                this.userName = userName;
                this.role = role;
                this.img = img;
                this.token = token;
    }
}