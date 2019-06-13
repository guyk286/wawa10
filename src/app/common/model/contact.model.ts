export class ContactModel
{
    sujet: string;
    email: string;
    message: string;
    
    constructor(sujet: string, email: string, message: string)
    {
        this.sujet=sujet;
        this.email=email;
        this.message=message;
    }
}
