import express from 'express';
const router = express.Router();
import axios from 'axios';

/**
* 
* @param
*
* @return
*/ 
router.post('/login', async function(req: any, res: any) {
  const retObj = {ret: 500, message: ""};
  try {
    if(!req.body){
      throw new Error("nothing, body");
    }
    const body = req.body;
console.log(req.body);
console.log("AUTH_USER_MAIL= ", process.env.AUTH_USER_MAIL);
//console.log("AUTH_PASSWORD= ", process.env.AUTH_PASSWORD);
    if(process.env.AUTH_USER_MAIL === body.email
      && process.env.AUTH_PASSWORD === body.password
    ) {
      console.log("OK");
      //process.env.APP_NAME
      const key = process.env.APP_NAME + "_auth"
      res.cookie(key, process.env.AUTH_USER_ID);
      retObj.ret = 200;
      return res.json(retObj)
    }
    retObj.ret = 400;
    return res.json(retObj)
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
router.post('/logout', async function(req: any, res: any) {
  const retObj = {ret: 500, message: ""};
  try {
//console.log("AUTH_PASSWORD= ", process.env.AUTH_PASSWORD);
    retObj.ret = 200;
    const key = process.env.APP_NAME + "_auth"
    res.clearCookie(key);
    return res.json(retObj)
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
