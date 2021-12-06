import { useState } from 'react';
import {Avatar, Input, Carousel, Drawer, Space, Button, Typography, Layout} from 'antd';
import '@ant-design/icons';
import Header from '../../components/Header'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'
import './index.css'

const Home = () => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Header
                className="site-page-header"
                title="Home"
                backIcon={<MenuOutlined />}
                onBack={showDrawer}
                extra={
                    <Avatar size={50} icon={<UserOutlined />} />
                }
            />
            <div className="homeBody">
                <div className="searchBar">
                    <Input.Search />
                </div>
                <div className="destaquesH1">
                    <h2 >Destaques da Semana</h2>
                </div>
                <div className="carousel">
                    <Carousel autoplay dots dotPosition="top">
                        <div className="items">
                            <Avatar size={50} icon={<UserOutlined />} />        
                            <Avatar size={50} icon={<UserOutlined />} />
                        </div>
                        <div className="items">
                            <Avatar size={50} icon={<UserOutlined />} />        
                            <Avatar size={50} icon={<UserOutlined />} />
                        </div>
                        <div className="items">
                            <Avatar size={50} icon={<UserOutlined />} />        
                            <Avatar size={50} icon={<UserOutlined />} />
                        </div>
                        <div className="items">
                            <Avatar size={50} icon={<UserOutlined />} />        
                            <Avatar size={50} icon={<UserOutlined />} />
                        </div>
                    </Carousel>
                </div>
            </div>
            <Drawer
                title="Drawer with extra actions"
                placement="left"
                width={500}
                onClose={onClose}
                visible={visible}
            >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
      </Drawer>
        </>
    );
}

export default Home;