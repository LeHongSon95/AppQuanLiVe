import React from 'react';
import logo from './logo.svg';
import { Header1 } from './components/header1/Header';

import { LayOut } from './components/LayOuts/layout';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Header } from './components/Header/Menu';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DanhSachVe } from "./components/quanliVe/DanhSachVe";
import { DanhSachGoiVe } from "./components/DoiSoatVe/DoiSoatVe";
function App() {

  return (
    // <div style={{ backgroundColor: 'antiquewhite', width: 'auto', height: 1500 }}>
    //   <Header1 />
    //     <div><Header /></div>
    //     <div style={{marginLeft:'300px', marginTop:'-390px'}}><Layout /></div> 
    //   </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="/" element={<LayOut />} />
          <Route path="/DanhSachVe" element={<DanhSachVe />} />
          <Route path="/DoiSoatVe" element={<DanhSachGoiVe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
