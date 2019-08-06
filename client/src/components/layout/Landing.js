import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";



class Landing extends Component {
    constructor(props) {
        super(props); 
            this.state = { 
                videoURL:
                    "https://player.vimeo.com/external/336505987.hd.mp4?s=9157fafbe27ffebaa2cdbb2536cba5729c506f12&profile_id=174"
            };
        
    }





  render() {
    return (
        <><video id="background-video" loop autoPlay muted>
        <source src={this.state.videoURL} type="video/mp4" />
        <source src={this.state.videoURL} type="video/ogg" />
        Your browser does not support the video tag.
        </video>

      <div className="container valign-wrapper">
        <div className="row">
          <div>
            <p className="flow-text">
              Relocate
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ >

    );
  }
}




export default Landing;