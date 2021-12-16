import React from 'react'
import AuthButton from '../components/AuthButton';
import './about.css'

export default function IndexPage() {
	return (
		<div id="page-top">
         
 
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Calorie Tracker</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white mb-5">Start today by being Concious about your calories and nutrtion intake!</p>
                        <a className="btn btn-primary btn-xl" href="#services">Learn More</a>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- About--> */}
        {/* <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">Why did we create this?</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                        <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- Services--> */}
        <section className="page-section" id="services">
            <div id='divElement'className=" px-4 px-lg-5">
                <h2 className="text-center text-white mt-0">Our Mission</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2 text-white">Tracking</h3>
                            <p className="mb-0 text-white">Track what food you have eaten throguht the day</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2 text-white">Eating healthier</h3>
                            <p className=" mb-0 text-white" >Looking at nutrtion facts, being mindful of what nutrtion you are consuming </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2 text-white">Calorie</h3>
                            <p className="text-white mb-0">Watch how much calories you have taken in</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2 text-white">Nearby Restaurants</h3>
                            <p className="text-white mb-0">displaying restrauants menu with nutrtion information in your area</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    

        {/* <!-- Contact--> */}




    </div>
	)
}