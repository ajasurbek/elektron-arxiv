import './Action3User1.css'
import { AiOutlineHome } from 'react-icons/ai'
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Action3Btn from './Action3Btn';
const Action3User1 = () => {
    return (
        <>
       <div className="action3__wrapper">
           <AiOutlineHome className="action3__icon"></AiOutlineHome>
       <p className="action3__text">
        Электрон хужжатлар базаси (аризалар)
        </p>
       <Action3Btn/>
        <Button type="success" icon={<SearchOutlined />}>
        Излаш шаклини очиш
    </Button>
       </div>
        </>
    )
}
export default Action3User1