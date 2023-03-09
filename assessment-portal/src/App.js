import {
  UserOutlined,
  HomeOutlined,
  BarChartOutlined,
  AppstoreAddOutlined,
  ImportOutlined,
 } from '@ant-design/icons'

import { DatePicker, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  return (
    <div>

      <Header title='ILP-Assessment-Portal' />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DatePicker>Fecha</DatePicker>
          <Content />
        </div>
      </div>

    </div>

  );
}

function NavBar(){
  const navigate = useNavigate()
  return(
  <div >
      
  <Menu
  
  onClick={({key})=>{
    if(key === "logout"){
      //TODO, sign out feature
    }else{
      navigate(key)
    }
  }}

  defaultSelectedKeys={[window.location.pathname]}
  
  items={[
  { label: "Profile", 
    key: "/user", 
    icon: <UserOutlined/>,},
  { label: "Home",
    key:"/" ,
    icon: <HomeOutlined />},
  { label: "Statistics",
    key: "/statistics",
    icon: <BarChartOutlined />},
  { label: "Add Activity",
    key: "/addactivity", 
    icon: <AppstoreAddOutlined /> },
  { label: "Log Out", 
    key: "logout", 
    danger: true, 
    icon:<ImportOutlined /> }]}>

  </Menu>
  </div>
  );
}



function Content() {
  return ( 
    <div>
      <Routes>
        <Route path="/user" element= {<div>Profile</div>}></Route>
        <Route path="/" element= {<div>Home</div>}></Route>
        <Route path="/statistics" element= {<div>Statistics</div>}></Route>
        <Route path="/addactivity" element= {<div>Add Activity</div>}></Route>
        <Route path="/logout" element= {<div>Log Out</div>}></Route>
        
      </Routes>
      
    </div>
  );
}


export default App;
