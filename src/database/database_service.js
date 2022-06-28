import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset';

export async function getConnection() {

  FileSystem.downloadAsync(
    FileSystem.documentDirectory + 'C:\Users\Camila Tereza\Desktop\TCC\code_social\src\database\code_social_base.sqlite'
  ).then(({uri}) => {
    console.log('Finished downloading to ', uri)
  }).catch(error => {
    console.error(error);
  })
  // getConnection: () => SQLite.openDatabase('./code_social_base.sqlite')
}

export async function openConnection() {
  const internalDbName = "code_social_base.sqlite"; // Call whatever you want
  const sqlDir = FileSystem.documentDirectory + "SQLite/";

  if (!(await FileSystem.getInfoAsync(sqlDir + internalDbName)).exists) {
      await FileSystem.makeDirectoryAsync(sqlDir, {intermediates: true});
      const asset = Asset.fromModule(require("code_social_base.sqlite"));
      await FileSystem.downloadAsync(asset.uri, sqlDir + internalDbName);
  }
  this.database = SQLite.openDatabase(internalDbName);
}