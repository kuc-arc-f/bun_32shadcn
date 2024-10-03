
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
      let rNum = Math.floor(Math.random() * 10000);
      let statNum = Math.floor(Math.random() * 2);
      let stat  = "success";
      if(Number(statNum) === 0){
        stat  = "failed";
      }
      const now = new Date().getTime();
      let row = {
        //id: String(this.items.length + 1),
        id: String(now),
        amount: Number(body.amount),
        status: stat,
        email: body.email,
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
  addList: function(){
    try {
      const now = new Date().getTime();
      const tmArray = [now, now + 10, now + 20]
      //console.log(tmArray);
      const maxNum = 3;
      for (let i = 1; i <= maxNum; i++){
        let rNum = Math.floor(Math.random() * 10000);
        let statNum = Math.floor(Math.random() * 2);
        //console.log("statNum = ", statNum);
        let stat  = "success";
        if(Number(statNum) === 0){
          stat  = "failed";
        }
        let targetId = 0;
        if(tmArray[i-1]) {
          targetId = tmArray[i-1];
        }
        let row = {
          id: String(targetId),
          amount: Number(rNum),
          status: stat,
          email: `testname-${String(rNum)}@test.com`,
        }
        this.items.push(row);
      }
      return this.items;
    } catch (error) {
      console.error(error);
      throw new Error("error, addList");
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
//        const result = this.items.filter((item) => Number(item.id) === body.id);
        const out: any[] = [];
        this.items.forEach((item) => {
          console.log(item)
          if(Number(item.id) !== body.id){
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
        const result = this.items.filter((item) => Number(item.id) === Number(body.id));
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
    //console.log("#update");
    try {
      if(body) {
        //console.log(body);
        //console.log("id=", body.id);
        const out: any[] = [];
        this.items.forEach((item) => {
          //console.log(item)
          if(Number(item.id) === body.id){
            item.amount = Number(body.amount);
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
