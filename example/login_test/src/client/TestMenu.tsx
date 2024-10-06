import Head from '../components/Head'
//
function Page() {
  return (
  <>
    <Head />
    <div className="container mx-auto my-2 px-8 bg-white">
      <h1 className="text-4xl text-gray-700 font-bold my-2"
      >TestMenu</h1>
      <hr className="my-2" />
      <a href="/list_test" className="ms-2"> [ ListTest ]</a>
      <a href="/list_test2" className="ms-2"> [ ListTest2 ]</a>
      <a href="/list_test6" className="ms-2"> [ ListTest6 ]</a>
      <a href="/navi_test" className="ms-2"> [ NaviTest ]</a>
      <a href="/todo" className="ms-2"> [ Todo ]</a>
      <a href="/api_test" className="ms-2"> [ ApiTest ]</a>
      <hr />
    </div>
  </>
  )
}

export default Page;