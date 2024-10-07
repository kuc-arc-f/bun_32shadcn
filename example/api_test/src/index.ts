import fs from 'node:fs/promises'
import express from "express";
import { renderToString } from 'react-dom/server';

import Top from './pages/App';
import About from './pages/about';
//
import Common from './lib/Common';
import apiTestRouter from './routes/apiTestRouter';
import commonRouter from './routes/commonRouter';
import todoRouter from './routes/todoRouter';
import tableData from './routes/tableData';
import userRouter from './routes/userRouter';
//
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('dist'));
app.use(express.static('public'));
console.log("env= ", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
//MPA 
//API
const data = tableData.addList();
//console.log(data);
app.use('/api/api_test', apiTestRouter);
app.use('/api/common', commonRouter);
app.use('/api/todo', todoRouter);
app.use('/api/user', userRouter);
//console.log("#api_START");
app.post("/api/table/get_list", async(req, res) => {
  try {
    const items = tableData.getList();
console.log(items);
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.post("/api/table/create", async(req, res) => {
  try {
console.log(req.body);
    const items = tableData.create(req.body);
    //console.log(items);
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.post("/api/table/delete", async(req: any, res: any) => {
  try {
    console.log(req.body);
    const items = tableData.delete(req.body);
//console.log(items);
    return res.json([]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.post("/api/table/update", async(req: any, res: any) => {
  try {
    console.log(req.body);
    const items = tableData.update(req.body);
//console.log(items);
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/api/table/get", async(req: any, res: any) => {
  try {
    console.log(req.body);
    const items = await tableData.getItem(req.body);
console.log(items);
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get("/*", (req, res) => {
  res.send(renderToString(Top()));
});
//start
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
  