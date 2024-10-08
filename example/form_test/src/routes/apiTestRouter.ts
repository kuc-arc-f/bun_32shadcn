import express from 'express';
const router = express.Router();
//require('dotenv').config();
import axios from 'axios';
import { z } from 'zod';

const FormData = z.object({
  title: z
    .string()
    .min(1, { message: '1文字以上入力してください。' }),
  content: z
    .string()
    .min(1, { message: '1文字以上入力してください。' }),
});
/**
* 
* @param
*
* @return
*/ 
router.post('/create', async function(req: any, res: any) {
  const retObj = {ret: 500, message: "", errors: {}}
  try {
    const body = req.body;
    console.log(body);
    FormData.parse(body);
    //return res.json(response.data);
  } catch (e) {
    console.error(e);
    retObj.errors = e.flatten().fieldErrors;
    return res.json(retObj);
  }
  try {
    const url = process.env.VITE_API_URL; 
console.log(req.body);
    const path = "/test/create";	
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
/**
* 
* @param
*
* @return
*/ 
router.post('/send_kv_put', async function(req: any, res: any) {
  try {
    //console.log("url=", process.env.API_URL);
    const url = process.env.KV_URL; 
    const item = {
      api_key: process.env.KV_API_KEY,
      key: "uid:" + String(process.env.AUTH_USER_ID),
      value: "222",
    };
//console.log(req.body);
    const path = req.body.api_url;	
console.log("path=", url + path);
    const response = await axios.post(url + "/put", item, 
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
