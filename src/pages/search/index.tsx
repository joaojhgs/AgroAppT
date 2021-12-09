import { AimOutlined, ArrowLeftOutlined, FilterOutlined, UserOutlined } from '@ant-design/icons';
import { AutoComplete, Avatar, Card, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { products } from '../../data';
import './index.css'

const Search = () => {
    let searchString: string = '';
    const history = useHistory();
    console.log('search', window.location.search);
    
    if(window.location.search){
        searchString = window.location.search?.slice(1).split('=')[1]
    }

    console.log('searchString', searchString);

    return (  
        <>
        <Header
            className="site-page-header"
            title="Search"
            backIcon={<ArrowLeftOutlined />}
            onBack={() => window.history.back()}
            extra={
            <>
                <Avatar size={50} style={{ backgroundColor: 'inherit', color: 'black' }} icon={<FilterOutlined />} />
                <Avatar size={50} style={{ backgroundColor: 'inherit', color: 'black' }} icon={<AimOutlined />} />
            </>
        }
        />
        <div className="flex flex-wrap justify-center">
        <div className="w-4/5">
            <AutoComplete
                        options={products.map(product => ({
                            value: product.name,
                        }))}
                        filterOption={(inputValue, option) =>
                        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        className="w-full"
                    >
                        <Input.Search defaultValue={searchString} onSearch={(value) => {
                            history.push(`/AgroAppT/search?name=${value}`)
                            searchString = value;
                            }} />
            </AutoComplete>
        </div>

            <div className="justify-center md-auto flex flex-wrap mt-1 w-4/5">

                {
                    products.filter(product => (product.name.toLowerCase().includes(searchString?.toLowerCase()))).map(product => {
                        return (
                            <Card hoverable bordered={true} className="w-full rounded-md flex">
                                <img alt={product.name} src={product.img} className="w-16 itemImage"/>
                                <div className="block ml-2">
                                    <h3 className="font-bold">{product.name}</h3>
                                    <div>
                                        <h3>Preço: {product.preco}</h3>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Search;