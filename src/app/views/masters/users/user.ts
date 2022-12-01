export interface User {
    id:string;
    proofId: string;
    firstName:string;
    lastName:string;
    designation?:string;
    phone?:number;
    email?:string;
    organization?:string;
    image?:string
}