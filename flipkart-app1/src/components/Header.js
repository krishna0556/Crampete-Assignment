import '../assests/css/header.css';
import Banner from '../assests/images/banner.png';
import Searchbox from './Searchbox';
import Login from './Login';
import Dropdown from './Dropdown';
import Cart from './Cart';

function Header() {
    return (
        <div className="headerSection">
            <div className="center">
                <a href="#"><img className="logo" src={Banner}/></a>
                <Searchbox/>
                <Login/>
                <Dropdown/>
                <Cart/>
            </div>
        </div>
    );
}
export default Header;