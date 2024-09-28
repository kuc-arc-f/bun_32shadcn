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
import Input from './client/Input';
import ListTest from './client/ListTest';
import ListTest2 from './client/ListTest2';
import ListTest4 from './client/ListTest4';
import ListTest5 from './client/ListTest5';
import ListTest6 from './client/ListTest6';
import Todo from './client/Todo'; 
//
import NavigationMenu from './client/NavigationMenu';
import Progress from './client/Progress';
import Radio from './client/Radio';
import Select from './client/Select';
import Sheet from './client/Sheet';
import Sheet4 from './client/Sheet4';
import Switch from './client/Switch';
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
        <Route path="/list_test" element={<ListTest />} />
        <Route path="/list_test2" element={<ListTest2 />} />
        <Route path="/list_test4" element={<ListTest4 />} />
        <Route path="/list_test5" element={<ListTest5 />} />
        <Route path="/list_test6" element={<ListTest6 />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/input" element={<Input />} />
        <Route path="/navigation_menu" element={<NavigationMenu />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/select" element={<Select />} />
        <Route path="/sheet" element={<Sheet />} />
        <Route path="/sheet4" element={<Sheet4 />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/table" element={<Table />} />
        <Route path="/textarea" element={<TextArea />} />
        <Route path="/data_table_test1" element={<DataTableTest1 />} />
        <Route path="/data_table_test2" element={<DataTableTest2 />} />
      </Routes>
    </div>
    )
}
/*
*/