import React from 'react';
import '../styles/style.css'

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


const HomePage = (props) => {
    return (
        <div>
            <div className="container">
                <div className="homepage">
                <h1>SKI LANKA'S FIRST</h1>
                <h1>CRYPTOCURRENCY TRADING FLATFORM</h1>
                <p> Learn More</p>
                </div>
            </div>

            <div className="container-other-page">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<span style={{color: "#fff"}}>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab={<span style={{color: "#fff"}}>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab={<span style={{color: "#fff"}}>Tab 2</span>} key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
             </div>

           

        </div>
    )
}

export default HomePage