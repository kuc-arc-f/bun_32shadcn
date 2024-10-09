
const ClientUtil = {
  /**
   *
   * @param
   *
   * @return
   */  
  getInputValue: function(idName: string){
    try{
      const form = document.getElementById(idName);
      // フォーム内の全てのINPUT要素を取得
      if(!form){ return {}; }
      const inputs = form.getElementsByTagName('input');
      // 各INPUT要素のname属性を取得して表示
      const data = {};
      for (let i = 0; i < inputs.length; i++) {
          console.log(inputs[i].name);
          data[inputs[i].name] = inputs[i].value;
      }
      const textareaItems = form.getElementsByTagName('textarea');
      for (let i = 0; i < textareaItems.length; i++) {
        console.log(textareaItems[i].name);
        data[textareaItems[i].name] = textareaItems[i].value;
      }

      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getInputValue");
    }
  },
  /**
   *
   * @param
   *
   * @return
   */  
  getElementValue: function(idName: string) : string
  {
    try{
      let ret = "";
      const elem = document.getElementById(idName);
      // フォーム内の全てのINPUT要素を取得
      if(!elem){ return ret; }
      ret = elem.value;
      
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getElementValue");
    }
  },
  /**
   *
   * @param
   *
   * @return
   * true: checked(value=on)
   */  
  getCheckboxValue: function(idName: string) : string
  {
    try{
      let ret = false;
      const elem = document.getElementById(idName);
      console.log("checked=", elem.checked);
      if(!elem){ return ret; }
      ret = elem.checked;
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getCheckboxValue");
    }
  },
  /**
   *
   * @param
   *
   * @return
   * value(selected)
   */  
  getRadioValue: function(name: string) : string
  {
    try{
      let ret = "";
      const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
      if (selectedOption) {
        //alert(`Selected option: ${selectedOption.value}`);
        ret = selectedOption.value;
        return ret;
      } 
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getRadioValue");
    }
  },
}
export default ClientUtil;
