import '../assests/css/header.css';


function Searchbox() {
    return (
        <div className="search">
            <a href="#"><i class="fas fa-search"></i></a>
            <input type="text" className="searchbox" placeholder="Search for products, brands and more" size="70"/>
        </div>
    );
}
export default Searchbox;