var config = {
development: {
    db: {
        host:   'localhost',
        user:   'root',
        password:'root',
        database:     'food'
    },
    server: {
        host:   'localhost',
        port:   '3000'
    }
},
production: {
    //mysql connection settings
    db: {
        host: 'localhost',
        user:   'root',
        password:'root',
        database:     'food'
    },
    //server details
    server: {
        host:   'localhost',
        port:   '3000'
    }
}
};
module.exports = config;