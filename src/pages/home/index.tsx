import { useState } from 'react';
import {Avatar, Input, Carousel, Drawer, Card, Space, Button, Typography, Layout} from 'antd';
import '@ant-design/icons';
import Header from '../../components/Header'
import { MenuOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons'
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
                    <div className="products">
                        <h1>Products</h1>
                        <Carousel autoplay dots={false} dotPosition="top">
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            </div>
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            </div>
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            </div>
                        </Carousel>
                        <Carousel autoplay dots={false} dotPosition="top">
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            </div>
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            </div>
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://img.elo7.com.br/product/zoom/27DBE8F/essencia-maca-vermelha-100-ml-essencia-saboaria.jpg"/>
                                <h2>Maça</h2>
                            </Card>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="carousel">
                    <div className="vendedores">
                        <h1>Vendedores</h1>
                        <Carousel autoplay dots={false} dotPosition="top">
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            </div>
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            </div>
                            <div className="items">
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            <Card hoverable bordered={false} className="itemCard">
                                <img className="itemImage" src="https://fortatacadista.vteximg.com.br/arquivos/ids/161426-800-800/PERA-IMPORTADA-KG---683590.jpg?v=637437446242530000"/>
                                <h2>Pera</h2>
                            </Card>
                            </div>
                        </Carousel>
                    </div>
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