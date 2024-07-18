import cds, { Request } from "@sap/cds"


export class BookManagementService extends cds.ApplicationService {
    constructor() {
        super()
        this.before('READ', 'Books', (request) => this.beforeReadBooks)
    }

    public async beforeReadBooks(request: Request): Promise<void> {
        const books = await cds
            .read('Books')
            .where({ publishedYear: { gt: 2000 } }, { publicationDate: { lt: 1990 } })
            .orderBy('publishedYear', 'title')
        console.log(books);
    }
}