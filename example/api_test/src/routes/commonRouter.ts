import express from 'express';
const router = express.Router();
//require('dotenv').config();
import axios from 'axios';

/**
* 
* @param
*
* @return
*/ 
router.post('/table_list', async function(req: any, res: any) {
  try {
    const items = [];
    const maxNum = 3;
    for (let i = 1; i <= maxNum; i++){
      let rNum = Math.floor(Math.random() * 10000);
      let statNum = Math.floor(Math.random() * 2);
      //console.log("i = " + i);
      //console.log("statNum = ", statNum);
      let stat  = "success";
      if(Number(statNum) === 0){
        stat  = "failed";
      }
      let row = {
        id: String(i),
        amount: Number(rNum),
        status: stat,
        email: `testname-${String(rNum)}@test.com`,
      }
      items.push(row);
    }
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/ 
router.post('/test', async function(req: any, res: any) {
  try {
    const items = [];
    const maxNum = 1000;
    for (let i = 1; i <= maxNum; i++){
      let rNum = Math.floor(Math.random() * 10000);
      let statNum = Math.floor(Math.random() * 2);
      //console.log("i = " + i);
      //console.log("statNum = ", statNum);
      let stat  = "success";
      if(Number(statNum) === 0){
        stat  = "failed";
      }
      let row = {
        id: String(i),
        amount: Number(rNum),
        status: stat,
        email: `testname-${String(rNum)}@test.com`,
      }
      items.push(row);
    }
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/**
* 
* @param
*
* @return
*/ 
router.post('/send_post', async function(req: any, res: any) {
  try {
    //console.log("url=", process.env.API_URL);
    const url = process.env.VITE_API_URL; 
//console.log(req.body);
    const path = req.body.api_url;	
console.log("path=", url + path);
    const response = await axios.post(url + path, req.body, 
    {headers: { 'Content-Type': 'application/json'}
    });
//console.log(data);
    //@ts-ignore
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
