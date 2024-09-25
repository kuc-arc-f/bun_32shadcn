import fs from 'node:fs/promises'
import express from "express";
import { renderToString } from 'react-dom/server';

import Top from './pages/App';
import About from './pages/about';
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
app.get("/*", (req, res) => {
  res.send(renderToString(Top()));
});
//start
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
  