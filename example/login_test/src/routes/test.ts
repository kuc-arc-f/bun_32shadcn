import express from 'express';
const router = express.Router();

const dataItems: any[] = [
  {id:1, title: "title_1"},
  {id:2, title: "title_2"},
  {id:3, title: "title_3"},
];
/**
* 
* @param
*
* @return
*/ 
router.post('/test', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
// get_list

/**
* 
* @param
*
* @return
*/
router.post('/test1', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json({});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
