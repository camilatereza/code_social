import { DatabaseConnection } from '../database/connection'

const table = "checkpoint"
const db = DatabaseConnection.getConnection()

export function deleteById(id) {
  db.transaction(
    tx => {
      tx.executeSql(`delete from ${table} where id = ?;`, [id],
        (_, { rows }) => {
        }),
        (sqlError) => {
          console.log(sqlError);
        }
    },
    (txError) => {
      console.log(txError);

    });
}

export function findAll() {
  return new Promise((resolve, reject) =>
    db.transaction(tx => {
      tx.executeSql(`select * from ${table}`, [],
        (_, { rows }) => {
          resolve(rows)
        }),
        (sqlError) => {
          console.log(sqlError);
        }
    }, (txError) => {
      console.log(txError);
    }))
}