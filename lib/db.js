const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_crud_db'
})

connection.connect(err => {
    if(!!err){
        console.log(err)
    }else{
        console.log('Connected...')
    }
})

module.exports = connection