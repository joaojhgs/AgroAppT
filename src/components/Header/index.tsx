import { PageHeader} from 'antd';
import { ReactElement, ReactNode } from 'react';
import './index.css';


interface IProps {
    className?: string,
    backIcon?:  ReactNode,
    onBack: () => void,
    title?: string,
    subTitle?: string,
    extra?: ReactNode,
}

const Header = ({className, backIcon, onBack, title, subTitle, extra}: IProps): ReactElement => {

    return (
    <PageHeader
        className={className}
        backIcon={backIcon}
        onBack={onBack}
        title={title}
        subTitle={subTitle}
        extra={[extra]}
    >
    </PageHeader>
    );
}

export default Header;