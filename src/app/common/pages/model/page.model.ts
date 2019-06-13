export interface PageItf
{
    id: number;
    key: string;
    content: string;
    created_at: Date;
    updated_at: Date;
} 

export class PageModel implements PageItf
{

    constructor(
        public id: number,
        public key: string,
        public content: string,
        public created_at: Date,
        public updated_at: Date
    )
    { }
}
