import { useState } from "react";
import { connection } from "../database/database_service";
import { random } from "./commands";

const db = connection.getConnection();

export function newData() {
  var len = 0;
  let [checkData, setCheckData] = useState([]);

  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM checkpoint',
      [],
      (tx, results) => {
        var temp = [];
        len = results.rows.length
        for (let i = 0; i < len; ++i) {
          temp.push(results.rows.item(i));
        }
        setCheckData([])
        setCheckData(temp);
      }
    );
  });
  const data = [];
  var position = random(0, len);

  checkData.map((item, index) => {
    if (index == position) {
      data.push(item)
    } else {
      data.push("Nenhum dado encontrado")
    }
  })
  return (data)
}