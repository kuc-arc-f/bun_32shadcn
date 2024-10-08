
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
  }
}
export default ClientUtil;
