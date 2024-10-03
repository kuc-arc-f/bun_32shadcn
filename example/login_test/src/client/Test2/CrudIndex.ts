import HttpCommon from "../lib/HttpCommon";

const CrudIndex = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  getList:  async function() {
    try{
//console.log("#getList");
      let item  = {}      
      const json = await HttpCommon.post(item, "/api/common/test");
      let items = json;
      //console.log(json);
      return items;
      //setUpdatetime(new Date().toString());
    } catch (e) {
      console.error(e);
    } 
  }, 
}
export default CrudIndex;