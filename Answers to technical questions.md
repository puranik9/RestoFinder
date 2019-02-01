# Technical Questions

1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

    I spent around 3 hours in total on the coding test. The plan was to complete the required tasks in about 2 hours but then I decided to display the pages using infinite scroll and that took up a bit more time than expected.
    If I had more time, I would add the following features:
        a. Add a filter functionality to filter results based on dollar sign rating (for now) - sort ascending and descending, and further can even add filters based on review count, within certain distance etc.
        b. Add a map functionality with Google Maps API to display the restaurants location with respect to users location, thereby finding nearby restaurants, and even find directions.
        c. Use a different API to pull in restaurant data and provide more information like reviews, opening hours, website, distance from user etc.

---

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

    As I am at a fairly Junior level with React, I am very happy with the JSX syntax in which the HTML is directly included in the JavaScript code. It is definitely not the best feature of React but it makes life so much easier
    when developing an application with JavaScript.
    Here is a snippet of code that shows how I have used it:
    ```class DollarSignRating extends Component {
         constructor(props) {
             super(props);
             this.maxDollars = 4;
         }
         render() {
             let dollarSignCount = '';
             let fadedDollars = '';
             for(var i = 0; i < this.props.price; i++) {
                 dollarSignCount = dollarSignCount.concat('$');
             }
             for(var i = 0; i < (this.maxDollars - this.props.price); i++) {
                 fadedDollars = fadedDollars.concat('$');
             }
             return (
                 <div className="restaurant-dollar-sign-rating">
                     <span className="highlight">{ dollarSignCount }</span>
                     <span className="no-highlight">{ fadedDollars }</span>
                 </div>
             )
         }
     }

---

3. How would you track down a performance issue in production? Have you ever had to do this?

    Firstly, tests have to be created for every component and sub-component that is part of the application. With the tests, we have to ensure that all the tests are passing and the project builds fine, with the relevant build tools that are part of the application.
    Quite a bit of manual testing can be done before and after the app is in production. I have dealt with a few bugs that with occur on different platforms and screen sizes after the website/app was in production, even though the automated test scripts were passing.
    Because of these issues, I decided to manual test the website and created JIRA tickets for bugs, and dealt with them right away to make sure everything was as close to perfect in production.

---

4. How would you improve the API that you just used?

    I would try to get authorized with OpenTable API and use all the additional data such as reviews, opening hours, website. In addition to this, I would add functionality with Google Maps API and even look into Google's restaurant API.

---

5. Please describe yourself using JSON.

    ```{
        "name" : "Kartik Puranik Karkala",
        "title" : "Frontend Developer",
        "phone_number" : "5145603359",
        "location" : "Toronto, ON M5V 3V2",
        "email" : "puranikkartik@gmail.com",
        "objective" : "Highly talented individual with proficiency in JavaScript, HTML, CSS and React,
                        as well as strong ability to communicate and work in a team effectively,
                        seeking a full-time Frontend / Full Stack Developer role",
        "skillset" : [ "JavaScript, Java, HTML,
                        CSS, React, Bootstrap,
                        SASS/LESS, SQL, Git,
                        JIRA, Oracle,
                        Amazon Web Services(AWS),
                        Eclipse, Google Analytics" ]
        "education" : {
            "school" : "McGill University",
            "degree" : "Bachelor of Engineering",
            "major" : "Computer Engineering",
            "graduation" : "November 2018",
            "relevant_coursework" : "Data Structure & Algorithms, Operating Systems, Artificial Intelligence,
            Design Principles & Methods, Final Design Project"
            "projects" : [ "G2torial Design Project (Java)",
                           "FixMeStick Website (JavaScript, HTML, CSS)",
                           "Autonomous Robot Design Project (Java)",
                           "Bomberman (Java)" ]
        },
        "professional_experience" : {
            1: {
                "company_name" : "SAP Canada (SAP Hybris)",
                "start_date" : "January 2017",
                "end_date" : "May 2017",
                "location" : "Montreal, QC",
                "role" : "Frontend/ UI Developer",
                "core_technologies" : [ "JavaScript,
                                        Angularjs,
                                        HTML,
                                        CSS,
                                        Bootstrap" ]
                },
            2: {
                "company_name" : "FixMeStick Technologies",
                "start_date" : "December 2015",
                "end_date" : "December 2016",
                "location" : "Montreal, QC",
                "role" : "Frontend Web Developer",
                "core_technologies" : [ "JavaScript,
                                        HTML,
                                        CSS,
                                        Bootstrap" ]
            }
        },
        "interests" : [ "travelling",
                        "scuba diving",
                        "cooking",
                        "squash",
                        "working out",
                        "reading",
                        "hiking" ],
        "relevant_links" : {
            "github" : "https://github.com/puranik9",
            "linkedin" : "https://linkedin.com/in/kartikpuranik9",
            "portfolio_website" : "http://kartikpuranik.com"
        }
    }

---