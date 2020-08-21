export class RegisterResponse {
    status: boolean;
    msg: string;


    constructor(status,msg) {
        this.status = status;
        this.msg = msg;
    }

}
