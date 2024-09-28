//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/about" className="ms-2">&nbsp; [ about ]</a>
        <br />
        <a href="/list_test" className="ms-2"> [ ListTest ]</a>
        <a href="/list_test2" className="ms-2"> [ ListTest2 ]</a>
        <a href="/list_test6" className="ms-2"> [ ListTest6 ]</a>
        <a href="/todo" className="ms-2"> [ Todo ]</a>
        <a href="/api_test" className="ms-2"> [ ApiTest ]</a>
        <hr />
    </div>
    );
}
export default Page;
/*
<a href="/api_test" className="ms-2"> [ ApiTest ]</a>
*/