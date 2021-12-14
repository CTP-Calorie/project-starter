import React from 'react';
import './about.css'

function AboutUsPage(props) {
  return (
    <div>
  

   
<div className='this '>
    <div className=" container marketing">

      <div className="row">
        <div className="col-lg-4">
          <img className="rounded-circle" src="" alt="Generic placeholder " width="140" height="140" />
          <h2 className='information'> Seth Marcus</h2>
          <p className='about'>Queens College.</p>
          <p ><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src="./images/Javier.jpg" alt="Generic placeholder " width="150" height="150"/>
          <h2 className='information'>Javier Majano</h2>
          <p className='about'>CUNY John Jay Student</p>
          <p><a className="btn btn-secondary" href="https://infinite-anchorage-16926.herokuapp.com/"   target="_blank" rel="noopener noreferrer"role="button">My website »</a></p>
        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src="" alt="Generic placeholder " width="140" height="140"/>
          <h2 className='information'>Evan Adis</h2>
          <p className='about'>Brooklyn College.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
      </div>


  

      {/* <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d97cc6639%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d97cc6639%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
        </div>
      </div>

      <hr classNameName="featurette-divider" />

      <div classNameName="row featurette">
        <div classNameName="col-md-7 order-md-2">
          <h2 classNameName="featurette-heading">Oh yeah, it's that good. <span classNameName="text-muted">See for yourself.</span></h2>
          <p classNameName="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d97cc663b%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d97cc663b%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d97cc663b%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d97cc663b%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
        </div>
      </div>

      <hr className="featurette-divider"/> */}



    </div>

    </div>
    <footer className="container">
      <p className="float-right"><a href="#">Back to top</a></p>
      <p>© 2021 Caloric Conscious Clan, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    </footer>

 </div>
  );
}

export default AboutUsPage;