

export default function Dashboard() {


    return (

        <section id="dashboard">
            {/* Display a div with information about every post (if any) */}
            <div className="item">
                <img src="./images/tablet.png" alt="example1" />
                <h3 className="model">Synoptic Eye Tablet</h3>
                <div className="item-info">
                    <p className="price">Price: €1000</p>
                    <p className="availability">
                        Premium retailers, exclusive online stores
                    </p>
                    <p className="type">Type: Premium Tech</p>
                </div>
                <a className="details-btn" href="#">
                    Uncover More
                </a>
            </div>
            <div className="item">
                <img src="./images/controller.png" alt="example1" />
                <h3 className="model">Neural Impulse Controller</h3>
                <div className="item-info">
                    <p className="price">Price: €799</p>
                    <p className="availability">Underground black markets</p>
                    <p className="type">Type: Experimental</p>
                </div>
                <a className="details-btn" href="#">
                    Uncover More
                </a>
            </div>
            <div className="item">
                <img src="./images/drone.png" alt="example1" />
                <h3 className="model">Sky Seeker Drone</h3>
                <div className="item-info">
                    <p className="price">Price: €1200</p>
                    <p className="availability">
                        Mass-Market Retail, Online Marketplace
                    </p>
                    <p className="type">Type: Advanced Surveillance</p>
                </div>
                <a className="details-btn" href="#">
                    Uncover More
                </a>
            </div>
        </section>

    )
}