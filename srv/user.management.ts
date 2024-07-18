import cds, { Request } from '@sap/cds'
import { request } from 'http'

export class UserManagementService extends cds.ApplicationService {

    constructor() {
        super()
        this.before('READ', 'Users', (request) => this.beforeReadUsers)
    }

    public async beforeReadUsers(request: Request): Promise<void> {
        const users = await cds
        .read('Users')
        .columns('email', 'userName', 'firstName', 'lastName')
        .where({ email: 'teste@b2rise.com' })
        .orderBy('firstName', 'email')
        console.log(users)
    }
}