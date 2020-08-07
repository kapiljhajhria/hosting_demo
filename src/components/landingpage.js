import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <br></br>
            <br></br>
            <br></br>
            <img
              src="https://static.wixstatic.com/media/dca0ef_47a7983af35c4d3fa635172b9dd3db0a~mv2.png/v1/fill/w_800,h_800,al_c,q_90,usm_0.66_1.00_0.01/Edson.webp"
              alt="Edson"
              className="avatar-img"
              style={{ height: "350px", width: "338px" }}
            />

            <br></br>
            <br></br>

            <div className="banner-text">
              <h1> Software Engineer </h1>

              <hr />

              <p>
                Python | Matlab | Java | C# | C++ | MySQL | MongoDB | OracleDB |
                HTML/CSS | JavaScript | React | NodeJS
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/edson-trejo/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/edsontrejo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfrsgWQCVxkBwhqSldNxsQzHrTcGwKxgqSKflTvwVfNDgmwvsZxLGzTWRLBnWLfSFxVBdB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>

                {/* Youtube 
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>*/}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
