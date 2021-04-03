import '../assests/css/header.css';

function Dropdown() {
  return (
    <div className="dropdown">
        <a href="#" className="droplink">
            More <i class="fas fa-chevron-down"></i>
        </a>
        <div className="dropdown-content">
            <a href="#">Notifications Preferences</a>
            <a href="#">Sell on flipkart</a>
            <a href="#">24x7 Customer Care</a>
            <a href="#">Advertise</a>
            <a href="#">Download App</a>
        </div>
    </div>
  );
}

export default Dropdown;