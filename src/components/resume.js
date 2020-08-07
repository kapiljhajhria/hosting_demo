import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://static.wixstatic.com/media/dca0ef_47a7983af35c4d3fa635172b9dd3db0a~mv2.png/v1/fill/w_916,h_887,al_c,q_90/dca0ef_47a7983af35c4d3fa635172b9dd3db0a~mv2.webp"
                alt="Edson"
                style={{ height: "350px", width: "340px" }}
              />
            </div>

            <h2 style={{ paddingTop: ".5em" }}>Edson Trejo</h2>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Throughout my life, I’ve approached every challenge with
              enthusiasm, creativity, and ceaseless desire to achieve success.
              This passion and drive have paved the way to countless
              opportunities, unique experiences and exceptional relationships
              both personally and professionally. Willing to relocate anywhere
              in the United States.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>724 Milpa Verde, Brownsville Tx. United States</p>
            <h5>Phone</h5>
            <p>(956) 295-8298</p>
            <h5>Email</h5>
            <p>edsontrejohdz@gmail.com</p>
            <h5>Web</h5>
            <p>https://www.linkedin.com/in/edson-trejo/</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2018}
              schoolName="The University of Texas Rio Grande Valley"
              schoolDescription="Bachelor of Science in Computer Science  |  Graduated: Fall 2018  |  GPA: 3.51"
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="The University of Texas Rio Grande Valley"
              schoolDescription="Master of Science in Computer Engineering  |  Graduated: Fall 2020  |  GPA: 3.33"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Engineering Intern– Panasonic Automotive Systems of America "
              jobDescription="• Analyze complex data to find common trends and patterns to help in making more informed decisions.
              • Collecting data from various sources, cleaning it to ensure accuracy and using various data models and algorithms to analyze the data.
              • Using data visualizations techniques to convey the findings to company officials.
              • Responsible for setting up computers and printers in order to run SAP ERP.
              • Helping with the implementation of 5.0 Ghz network.
              • Developing desktop program for the quality team to automatize the reports and keep them saved into a database.
              • Working closely with the engineering team to update the local web page to make audits inside the company and have access to it remotely.
              • Creating Microsoft Excel macros to make the process faster for the data clerks."
            />

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Web Developer - Graduate College"
              jobDescription="• Creating a Web page blog for faculty and staff using University SharePoint
              • Experience with server-side frameworks such as python, ruby, php, Java, ASP, ASP.NET
              • Experience with database systems such as MySQL, SQL and Oracle
              • Maintaining and expanding/enhancing the website once built
              • Managing a team"
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Graduate Specialist (Call Center)"
              jobDescription="• Responsible for responding to all prospective student inquiries about admissions process/requirements and program information.
              • Advises and coordinates advisement of graduate students and faculty relative to graduate training policies and procedures.
              • Manages large student database and records, including alumni tracking
              • Consults with representatives of other departments of the University, (such as financial aid office, or registration), as well as representatives from outside the university, in order to effectively manage the graduate application process"
            />

            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Web Developer- University Marketing & Communications "
              jobDescription="• Top-notch programming skills and in-depth knowledge of modern HTML/CSS/JavaScript/Angular.
              • -A solid understanding of how web applications work including security, session management, and best development practices.
              • Strong organizational skills to juggle multiple tasks within the constraints of timelines.
              • Work and thrive in a fast-paced environment, learn rapidly and master diverse web technologies and techniques."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Python" progress={100} />
            <Skills skill="Matlab" progress={95} />
            <Skills skill="Java" progress={90} />
            <Skills skill="C#" progress={90} />
            <Skills skill="C++" progress={85} />
            <Skills skill="MySQL" progress={100} />
            <Skills skill="OracleDB" progress={90} />
            <Skills skill="MongoDB" progress={85} />
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="React" progress={85} />
            <Skills skill="NodeJS" progress={85} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
