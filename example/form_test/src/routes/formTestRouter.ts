import express from 'express';
const router = express.Router();
//require('dotenv').config();
import axios from 'axios';
import formTestData from './formTestData';
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
  } catch (e) {
    console.error(e);
    retObj.errors = e.flatten().fieldErrors;
    return res.json(retObj);
  }
  try {
    if(!req.body){
      throw new Error("nothing, body");
    }
console.log(req.body);
    const items = formTestData.create(req.body);
    //console.log(items);
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
router.post('/get_list', async function(req: any, res: any) {
  //
  try {
    const items = formTestData.getList();
console.log(items);
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
router.post('/get', async function(req: any, res: any) {
  //
  try {
    console.log(req.body);
    const items = formTestData.getItem(req.body);
console.log(items);
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
router.post('/delete', async function(req: any, res: any) {
  try {
    if(!req.body){
      throw new Error("nothing, body");
    }
console.log(req.body);
    const items = formTestData.delete(req.body);
    //console.log(items);
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
router.post('/update', async function(req: any, res: any) {
  try {
    if(!req.body){
      throw new Error("nothing, body");
    }
console.log(req.body);
    const items = formTestData.update(req.body);
    //console.log(items);
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
