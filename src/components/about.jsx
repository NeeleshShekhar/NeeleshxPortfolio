import React from "react";
import myImage from "../Assets/neelesh.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I just love solving problems. Be it counselling a heart-broken friend or breaking my head for a complex mathematical problem or website-flow - I do them all. I am currently pursuing Bachelors in Computer Science at KIIT University. I am pretty much interested in Web Development and Digital Experience Designing because problem-solving can go well beyond the limits of engineering."
        },
        {
          id: "second-p-about",
          content:
            "I am a Diploma in Indian Classical Music and I think I can play Piano pretty well. I am currently leading a team of more than 10 Web Development enthusiasts and I must say some great minds at our college ACM chapter."
        },
        {
          id: "third-p-about",
          content:
            "Also, I have completed various projects in the field of Web development and Digital User Experience. If you think I sound interesting, drop me a message. We can catch up over a cup of coffee :)  "
        }
      ],
      logo:myImage

    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                <div className="col-md-6">
                <img
                 src={this.state.logo}
                 alt="logo"
                 style={{ maxWidth: "100%", marginTop: "1%" }}
                />
                </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <div>
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
