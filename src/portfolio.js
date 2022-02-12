/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Badrinath",
  title: "Hey there, I'm Badri",
  subTitle: emoji(
    "A passionate Full Stack Developer and graphic-designer🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Figma  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/badrinath117",
  linkedin: "https://www.linkedin.com/in/badrinath-sivanantham-0043b31b6",
  gmail: "badrinathsivanantham1@gmail.com",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE DIFFERENT TECHNOLOIGES",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Design protoypes and visual concepts using softwares such as FIGMA AND PHOTOSHOP"),
    emoji(
      "⚡ Integration of third party services such as Firebase AND AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kaumaram Sushila International Residential School",
      logo: require("./assets/images/ksirs.png"),
      subHeader: "Cambridge Board - O , AS and A level",
      duration: "September 2008 - April 2022",
      descBullets: [
        "O-Level -  Physics, Chemistry, Biology, Math, English, Information Technology",
        "AS-Level - Physics, Math, English, Computer Science",
        "A-Level - Physics, Math, Computer Science"
      ]
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web-Developer",
      company: "Device Control Systems",
      companylogo: require("./assets/images/device.jpg"),
      date: "2019-October",
      desc: "I updated and kept track of their website",
      descBullets: [
        "I uploaded images on their portfolio page of their website",
        "I alos uodated their contact information"
      ]
    },
    {
      role: "Graphic-Designe",
      company: "Arhats Pranic Healing Institue",
      companylogo: require("./assets/images/pranichealing.png"),
      date: "March-2020 - PRESENT",
      desc: "As a graphic designer i have created and designed new formats and template for reporting and presenting details regarding events and sales to customers."
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: " Projects",
  subtitle: "SOME OF MY PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/amazon11.png"),
      projectName: "Amazon-Clone",
      projectDesc: "Fully Functional clone with *Stripe-paymet-functionality, *User-login and logout, with Firebase-Serviece",
      footerLink: [
        {
          name: "View Github Code",
          url: "https://github.com/badrinath117/badrinath-amazon-clone"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/linkedin11.png"),
      projectName: "Linkedin-clone",
      projectDesc: "Replication of a social-media application built with react and redux",
      footerLink: [
        {
          name: "View Github Code",
          url: "https://github.com/badrinath117/LinkedIn-clone"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "White-Hat-Hacker",
      
      image: require("./assets/images/white-hat-hacker.jpeg"),
      footerLink: [
      
      ]
    },
    {
      title: "Web-Developer",
     
      image: require("./assets/images/web-developer.jpeg"),
      footerLink: [
       
      ]
    },

  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section


  

const contactInfo = {
  title: emoji("Contact Me !"),
  subtitle:
    "Discuss a project or just want to say hi,or have a start-up idea? My Inbox is open for all.",
  number: "+91 82203 96360",
  email_address: "badrinathsivanantham1@gmail.com"
};

// Twitter Section



export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  
};
