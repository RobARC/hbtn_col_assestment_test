module.export = {
    client: 'mysql2',
    database:  {
        host: 'localhost',
        user: 'hbtn_user2',
        password: 'Password_1234',
        database: 'companydb',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
}