import { useState } from 'react';
import {Avatar, Input, Carousel, Drawer, Card, Menu} from 'antd';
import '@ant-design/icons';
import Header from '../../components/Header'
import { MenuOutlined, UserOutlined, ShopOutlined, HistoryOutlined, CarOutlined } from '@ant-design/icons'
import './index.css'
import {productsDestaque, productsDestaque2, vendedoresDestaque, vendedoresDestaque2} from '../../data'

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
                    <div className="products">
                        <h1>Products</h1>
                            <Carousel dots={false} dotPosition="top">
                                <div className="items">
                                    {
                                    productsDestaque.map(product => (
                                        
                                        <Card hoverable bordered={false} className="itemCard">
                                            <img alt={product.name} className="itemImage" src={product.img}/>
                                            <h2>{product.name}</h2>
                                        </Card>
                                    ))
                                    }
                                </div>
                                <div className="items">
                                    {
                                    productsDestaque2.map(product => (
                                        
                                        <Card hoverable bordered={false} className="itemCard">
                                            <img alt={product.name} className="itemImage" src={product.img}/>
                                            <h2>{product.name}</h2>
                                        </Card>
                                    ))
                                    }
                                </div>
                            </Carousel>
                            <Carousel dots={false} dotPosition="top">
                            <div className="items">
                                    {
                                    productsDestaque2.map(product => (
                                        
                                        <Card hoverable bordered={false} className="itemCard">
                                            <img alt={product.name} className="itemImage" src={product.img}/>
                                            <h2>{product.name}</h2>
                                        </Card>
                                    ))
                                    }
                                </div>
                                <div className="items">
                                    {
                                    productsDestaque.map(product => (
                                        
                                        <Card hoverable bordered={false} className="itemCard">
                                            <img alt={product.name} className="itemImage" src={product.img}/>
                                            <h2>{product.name}</h2>
                                        </Card>
                                    ))
                                    }
                                </div>
                            </Carousel>
                    </div>
                </div>
                <div className="carousel">
                    <div className="vendedores">
                        <h1>Vendedores</h1>
                        <Carousel dots={false} dotPosition="top">
                        <div className="items">
                                    {
                                    vendedoresDestaque.map(vendedor => (
                                        
                                        <Card hoverable bordered={false} className="itemCard">
                                            <img alt={vendedor.name} className="itemImage" src={vendedor.img}/>
                                            <h2>{vendedor.name}</h2>
                                        </Card>
                                    ))
                                    }
                                </div>
                                <div className="items">
                                    {
                                    vendedoresDestaque2.map(vendedor => (
                                        
                                        <Card hoverable bordered={false} className="itemCard">
                                            <img alt={vendedor.name} className="itemImage" src={vendedor.img}/>
                                            <h2>{vendedor.name}</h2>
                                        </Card>
                                    ))
                                    }
                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <Drawer
                title="Menu"
                placement="left"
                width={500}
                onClose={onClose}
                visible={visible}
                style={{padding: "0px", maxWidth: "max-content"}}
            >
            <div className="menu"> 
                <Avatar size={200} icon={<UserOutlined />} />
                <Menu
                    style={{marginTop: "5px", width: "100%" }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                    Meu Perfil
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShopOutlined />}>
                    Meus Produtos
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HistoryOutlined />}>
                    Historico de compras
                    </Menu.Item>
                    <Menu.Item key="4" icon={<CarOutlined />}>
                    Transportadoras
                    </Menu.Item>
                </Menu>
            </div>
      </Drawer>
        </>
    );
}

export default Home;