import { useState } from "react";
import { connection } from "../database/database_service";

const db = connection.getConnection();

export const newData = () => {
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
        setCheckData(temp);
      }
    );
  });

  //sortear apenas um dado
  const data = [];
  data.push(checkData[random(0, len)]);
  return (data)
}

function random(min, max) {
  return (
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}