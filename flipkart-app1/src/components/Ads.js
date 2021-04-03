import Narzo from '../assests/images/Narzo.jpg';
import Poco from '../assests/images/Poco.jpg';

function Ads() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Narzo} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Poco} alt="Second slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ads;