import {Avatar, Input, Carousel, Typography, Layout} from 'antd';
import '@ant-design/icons';
import Header from '../../components/Header'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'
import './index.css'

const Home = () => {
    return (
        <>
            <Header
                className="site-page-header"
                title="Home"
                backIcon={<MenuOutlined />}
                onBack={() => { } }
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
        </>
    );
}

export default Home;