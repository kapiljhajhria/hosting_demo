import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Edson Trejo Hernandez</h2>
            <img
              src="https://static.wixstatic.com/media/dca0ef_ed651df0cb33412f952619a2ff6f49d7~mv2.jpg/v1/fill/w_424,h_560,al_c,lg_1,q_80/dca0ef_ed651df0cb33412f952619a2ff6f49d7~mv2.webp"
              alt="Edson"
              style={{ height: "350px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "2em" }}>
              Throughout my life, I’ve approached every challenge with
              enthusiasm, creativity, and ceaseless desire to achieve success.
              This passion and drive have paved the way to countless
              opportunities, unique experiences and exceptional relationships
              both personally and professionally. Willing to relocate anywhere
              in the United States.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (956) 295-8298
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    edsontrejohdz@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    edsontrejo
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
