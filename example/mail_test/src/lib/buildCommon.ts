import { promises as fs } from 'fs'
//
const buildCommon = {
  /**
  * 
  * @param
  *
  * @return ret: true (URL check reuire)
  */ 
  validatePath: async function(path: string): Promise<any>
  {
    try {
      let ret = false;
//console.log("validatePath.path=", path);
      const entryFiles = await this.getEntryItems('./src/client');
      entryFiles.forEach((element) => {
        if(element === path){
          //console.log("OK=", element);
          ret = true;
        }
      });
      return ret;
    } catch (error) {
      console.error('Error validatePath:', error);
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */  
  getEntryItems: async function(directoryPath: string): Promise<any>
  {
    try {
      const targetFiles: any[] = [];
      const files = await fs.readdir(directoryPath);
      files.forEach(file => {
        const vEnd = file.endsWith(".tsx");
        if(vEnd) {
//        let tmpName = directoryPath + "/" + file;
         let tmpName = file;
         tmpName = tmpName.replace(".tsx", '');
         let lowerText = "/" + tmpName.toLowerCase();
         targetFiles.push(lowerText);
        }
      });
      targetFiles.push("/");  //root
      return targetFiles;
    } catch (error) {
      console.error('Error getEntryItems:', error);
    }
  },
}
export default buildCommon;
