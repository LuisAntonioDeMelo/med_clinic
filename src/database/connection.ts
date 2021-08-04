import path from 'path'
///apenas para teste local
export default {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
  };