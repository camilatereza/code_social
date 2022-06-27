import { checkpoint } from '../global/models/checkpoint'
import { DatabaseConnection } from '../database/connection'

const table = "checkpoint"
const db = DatabaseConnection.getConnection()

// 'titulo', 
// 'descrisao', 
// 'desafio', 
// 'Fonte Biofarm', 
// 'resposta');

export function addData() {
  return new Promise((resolve, reject) => db.transaction(
    tx => {
      tx.executeSql(`insert into ${table} (titulo, descricao, desafio, fonte, resposta) 
          values ('titulo', 
          'descrisao', 
          'desafio', 
          'Fonte', 
          'resposta');`,
        [],
        (_, { insertId, rows }) => {
          console.log("id insert: " + insertId);
          resolve(insertId)
        }),
        (sqlError) => {
          console.log(sqlError);
        }
    },
    (txError) => {
      console.log(txError);
    }));
}

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