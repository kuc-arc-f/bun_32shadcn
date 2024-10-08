
import pkg from 'pg';
const { Client } = pkg;
//import { Pool, Client } from 'pg';
//
const LibPg = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  /*
  getPool: function(){
    try{
      const pool = new Pool({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
      });
      return pool;    
    } catch (e) {
      console.error(e);
      throw new Error('Error , getPool');
    }    
  },
  */
  /**
  * 
  * @param
  *
  * @return
  */ 
  getClient: function(){
    try{
//console.log("POSTGRES_USER=", import.meta.env.VITE_POSTGRES_USER);
      const client = new Client({
        user: import.meta.env.VITE_POSTGRES_USER,
        host: import.meta.env.VITE_POSTGRES_HOST,
        database: import.meta.env.VITE_POSTGRES_DATABASE,
        password: import.meta.env.VITE_POSTGRES_PASSWORD,
        port: import.meta.env.VITE_POSTGRES_PORT,
      })
      client.connect();
      return client;      
    } catch (err) {
      console.log(err);
      throw new Error('Error, getClient');
    }
  },

}
export default LibPg;
