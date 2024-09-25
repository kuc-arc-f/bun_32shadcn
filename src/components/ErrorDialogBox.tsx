//
function Compo(props: any) {
console.log(props);
  //
  const closeButton = function(){
    const dlg = document.getElementById('errorModalDialog');
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }
  //
  return (
  <dialog id="errorModalDialog" className="dialog">
    <div className="bg-white px-8 pt-3 pb-3 dialog_body_wrap">
      <p className="text-3xl font-bold text-red-400">{props.message}</p>
      <hr className="my-3" />
      <button onClick={()=>closeButton()}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-8 rounded"
        type="submit" value="OK">Ok</button>
    </div>
  </dialog>
  );
}
export default Compo;
/*
<form method="dialog mb-1">
  <button 
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-8 rounded"
  type="submit" value="OK">Ok</button>
</form>
*/