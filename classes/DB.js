
// Import Useful Packages
const mysql = require('mysql')

/**
 * This Class is Used to Deal With DB -- CRUD --
 */
class DB {
  // DB Credentials
  HOSTNAME = 'localhost'
  USERNAME = 'root'
  PASSWORD = ''
  DATABASE = 'est_gi'

  // DB Connection Object
  connection

  /**
   * Connect to DB
   */
  constructor() {
    // Create DB Connection
    let connection = mysql.createConnection({
      host: this.HOSTNAME,
      user: this.USERNAME,
      password: this.PASSWORD,
      database: this.DATABASE
    })

    // Connect to The DB
    connection.connect((err) => {
      if (err) throw (err)
      console.log('Databse connected successfully')
    })

    // Set Connection
    this.connection = connection
  }
}

// Export DB class instance
const db = new DB()
module.exports = db