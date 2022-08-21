import { iniciar } from '../utils/inserts';
import { DatabaseConnection } from './connection'

var db = null
export function DatabaseInit() {

  db = DatabaseConnection.getConnection()
  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
    console.log('Foreign keys turned on')
  );
  InitDb()
}

function InitDb() {
  var sql = iniciar;

  db.transaction(
    tx => {
      for (var i = 0; i < sql.length; i++) {
        // console.log("execute sql : " + sql[i]);
        tx.executeSql(sql[i]);
      }
    }, (error) => {
      console.log("error call back : " + JSON.stringify(error));
      console.log(error);
    }, () => {
      console.log("transaction complete call back ");
    }
  );
}