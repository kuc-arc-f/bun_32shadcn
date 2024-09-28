import HttpCommon from "../lib/HttpCommon";

const CrudIndex = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  create:  async function(values: any) {
    try{
//console.log("#getList");
      let item  = values;
      item.api_url = "/test/create";
      //console.log(item);
      const json = await HttpCommon.post(item, "/api/common/send_post");
      let items = json;
      console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  },  
  /**
  * 
  * @param
  *
  * @return
  */ 
  update:  async function(values: any) {
    try{
//console.log("#getList");
      let item  = values;     
      const json = await HttpCommon.post(item, "/api/common/send_post");
      let items = json;
      console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  },  

  /**
  * 
  * @param
  *
  * @return
  */ 
  getList:  async function() {
    try{
//console.log("#getList");
      let item  = {
        api_url: "/test/get_list",
      }      
      const json = await HttpCommon.post(item, "/api/common/send_post");
      let items = json;
      console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  },
    /*
  * 
  * @param
  *
  * @return
  */ 
  getItem:  async function(id: number) {
    try{
      const path = "/test/get";
      let item  = {
        id: id,
        api_url: path,
      }      
      const json = await HttpCommon.post(item, "/api/common/send_post");
      let items = json;
console.log(json);

      return items;
    } catch (e) {
      console.error(e);
    } 
  },    
  /**
  * 
  * @param
  *
  * @return
  */ 
  delete:  async function(id : number) {
    try{
//console.log("#getList");
      let item  = {
        id: id
      }      
      item.api_url = "/test/delete";
      const json = await HttpCommon.post(item, "/api/common/send_post");
      let items = json;
      console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  }, 
  
}
export default CrudIndex;