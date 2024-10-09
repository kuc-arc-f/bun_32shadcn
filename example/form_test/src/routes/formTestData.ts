import { v4 as uuidv4 } from 'uuid';
//
const tableData = {
  items: [],
  /**
  * 
  * @param
  *
  * @return
  */ 
  create: function(body: any){
    try {
      if(!body){
        throw new Error("nothing, body");
      }
console.log(body);
      const now = new Date();
      const myUUID = uuidv4();
      //console.log(myUUID);
      let row = {
        id: myUUID,
        title: body.title,
        content: body.content,
        createdAt: now.toISOString(),
        public: body.public,
        option_1: body.option_1,
        option_2: body.option_2,
        option_3: body.option_3,
        publish_date: "",
        num1: body.num1,
        num2: body.num2,
        num3: "",
      }
      this.items.push(row);
      return this.items;
    } catch (error) {
      console.error(error);
      throw new Error("error, create");
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */
  getList: function(){
    try {
      return this.items;
    } catch (error) {
      console.error(error);
      throw new Error("error, getList");
    }
  },

  /**
  * 
  * @param
  *
  * @return
  */ 
  delete: function(body: any){
    try {
      if(body) {
console.log("id=", body.id);
        const out: any[] = [];
        this.items.forEach((item) => {
          console.log(item)
          if(item.id !== body.id){
            out.push(item);
          }
        });
        this.items = out;
console.log(this.items);
        return this.items;
      }
      throw new Error("error, nothig body");
    } catch (error) {
      console.error(error);
      throw new Error("error, delete");
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */ 
  getItem: function(body: any){
    try {
      let ret = {};
      if(body) {
console.log("id=", body.id);
        const result = this.items.filter((item) => item.id === body.id);
console.log(result);
        if(result.length > 0){
          ret = result[0];
        }
//console.log(this.items);
        return ret;
      }
      throw new Error("error, nothig body");
    } catch (error) {
      console.error(error);
      throw new Error("error, getItem");
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */  
  update: function(body: any){
    console.log("#update");
    try {
      if(body) {
console.log(body);
        //console.log("id=", body.id);
        const out: any[] = [];
        this.items.forEach((item) => {
          //console.log(item)
          if(item.id === body.id){
            item.content = body.content;
            item.public = body.public;
            item.option_1 = body.option_1;
            item.option_2 = body.option_2;
            item.option_3 = body.option_3;
            item.publish_date = body.publish_date;
            item.num1 = body.num1;
            item.num2 = body.num2;
            out.push(item);
          }else{
            out.push(item);
          }
        });
        this.items = out;
//console.log(out);
        return this.items;
      }
      throw new Error("error, nothig body");
    } catch (error) {
      console.error(error);
      throw new Error("error, update");
    }
  },
}

export default tableData;
