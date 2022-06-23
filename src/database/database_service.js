import * as SQLite from 'expo-sqlite';

export const connection = {
  getConnection: () => SQLite.openDatabase({name: 'code_social_base.sqlite'})
}