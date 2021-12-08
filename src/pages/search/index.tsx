import { ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Header from '../../components/Header';

const Search = () => {
    return (  
        <>
        <Header
            className="site-page-header"
            title="Home"
            backIcon={<ArrowLeftOutlined />}
            onBack={() => window.history.back()}
            extra={<Avatar size={50} icon={<UserOutlined />} />} 
        />
            
        <div className="justify-center md-auto flex">
            <h1>teste</h1>
        </div>
            
        </>
    )
}

export default Search;