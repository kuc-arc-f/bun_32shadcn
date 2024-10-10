import { Routes, Route } from 'react-router-dom';

//
import Home from './client/home';
import About from './client/about';
import ApiTest from './client/ApiTest';
import AlertDialog from './client/AlertDialog';
import Button from './client/Button';
import Card from './client/Card';
import Calendar from './client/Calendar';
import CheckBox from './client/CheckBox';
import DatePicker from './client/DatePicker';
import DataTable from './client/DataTable';
import Dialog from './client/Dialog';
import Form from './client/Form';
import FormTest from './client/FormTest';
import FormTest2 from './client/FormTest2';
import FormTest2crate from './client/FormTest2/Create';
import FormTest2edit from './client/FormTest2/Edit';

import Input from './client/Input';
import ListTest from './client/ListTest';
import ListTest2 from './client/ListTest2';
import ListTest4 from './client/ListTest4';
import ListTest5 from './client/ListTest5';
import ListTest6 from './client/ListTest6';
import LoadTest from './client/LoadTest';
import Login from './client/login';

import Todo from './client/Todo'; 
import TestMenu from './client/TestMenu';
//
import NavigationMenu from './client/NavigationMenu';
import NaviTest from './client/NaviTest';
import Progress from './client/Progress';
import Radio from './client/Radio';
import Select from './client/Select';
import Sheet from './client/Sheet';
import Sheet4 from './client/Sheet4';
import Switch from './client/Switch';
import Sunspense1 from './client/Sunspense1';
import Table from './client/Table';
import TextArea from './client/TextArea';
//
import DataTableTest1 from './client/Test1';
import DataTableTest2 from './client/Test2';
//
export default function App(){
    return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api_test" element={<ApiTest />} />
        <Route path="/alert_dialog" element={<AlertDialog />} />
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Card />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/datepicker" element={<DatePicker />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form_test" element={<FormTest />} />
        <Route path="/form_test2" element={<FormTest2 />} />
        <Route path="/form_test2create" element={<FormTest2crate />} />
        <Route path="/form_test2edit" element={<FormTest2edit />} />
        <Route path="/list_test" element={<ListTest />} />
        <Route path="/list_test2" element={<ListTest2 />} />
        <Route path="/list_test4" element={<ListTest4 />} />
        <Route path="/list_test5" element={<ListTest5 />} />
        <Route path="/list_test6" element={<ListTest6 />} />
        <Route path="/load_test" element={<LoadTest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/input" element={<Input />} />
        <Route path="/navigation_menu" element={<NavigationMenu />} />
        <Route path="/navi_test" element={<NaviTest />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/select" element={<Select />} />
        <Route path="/sheet" element={<Sheet />} />
        <Route path="/sheet4" element={<Sheet4 />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/sunspense1" element={<Sunspense1 />} />
        <Route path="/table" element={<Table />} />
        <Route path="/test_menu" element={<TestMenu />} />
        <Route path="/textarea" element={<TextArea />} />
        <Route path="/data_table_test1" element={<DataTableTest1 />} />
        <Route path="/data_table_test2" element={<DataTableTest2 />} />
      </Routes>
    </div>
    )
}
/*
*/