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
  // `DROP TABLE IF EXISTS checkpoint;`;
  var sql = 
    `create table if not exists checkpoint (
      id integer primary key autoincrement unique not null,
      titulo text,
      descricao text,
      desafio text,
      fonte text,
      resposta text
    );`;
  

  db.transaction(
    tx => {
        console.log("execute sql : " + sql);
        tx.executeSql(sql);
    }, (error) => {
      console.log("error call back : " + JSON.stringify(error));
      console.log(error);
    }, () => {
      console.log("transaction complete call back ");
    }
  );
}