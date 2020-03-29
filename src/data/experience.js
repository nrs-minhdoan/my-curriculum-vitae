const experience = [
  {
    company: "vmodev",
    link: "https://www.vmodev.com",
    logo: require("../assets/images/ic_vmodev.svg"),
    status: "working",
    time: "08/2018",
    projects: [
      {
        icon: require("../assets/images/img_chubb_cms.png"),
        customer: "Chubb Life",
        position: "Front-End Developer",
        name: "Chubb CMS",
        size: 8,
        status: "building",
        product: "http://cms-chubb.vmo.group",
        description: "chubb_cms",
        time: "03/2020",
        platform: ["Web Application"],
        languages: ["TypeScript"],
        technologies: ["Angular 7", "Ng-Zorro", "RxJS", "NodeJS", "ExpressJS"],
        database: ["MongoDB", "Redis"],
        tools: ["Bitbucket", "Jira", "Slack"],
        tasks: [
          "Platform Statistic",
          "User List",
          "Create User",
          "Role & Permission"
        ]
      },
      {
        icon: require("../assets/images/img_chubb.png"),
        customer: "Chubb Life",
        position: "Front-End Developer",
        name: "Chubb",
        size: 8,
        status: "building",
        product: "http://chubb.vmo.group",
        description: "chubb",
        time: "03/2020",
        platform: ["Web Application"],
        languages: ["TypeScript"],
        technologies: [
          "Angular 7",
          "Angular Universal",
          "Ng-Zorro",
          "Bootstrap",
          "RxJS",
          "NodeJS",
          "ExpressJS"
        ],
        database: ["MongoDB", "Redis"],
        tools: ["Bitbucket", "Jira", "Slack"],
        tasks: ["Full Articles"]
      },
      {
        icon: require("../assets/images/ic_vn24_helper.svg"),
        customer: "Giup viec 365",
        position: "Mobile Application Developer",
        name: "ViecNha 24H Helper",
        size: 8,
        status: "waiting",
        product: ["http://bit.do/helper-android", "http://bit.do/helper-ios"],
        description: "vn24_helper",
        time: "11/2019",
        platform: ["Mobile Application"],
        languages: ["JavaScript", "TypeScript"],
        technologies: [
          "React Native",
          "React Navigation",
          "React Native Firebase",
          "Redux",
          "Redux-Saga",
          "React Native Elements",
          "NodeJS",
          "ExpressJS"
        ],
        database: ["MongoDB", "Redis"],
        tools: ["App Center", "Bitbucket", "Jira", "Slack", "Zalo"],
        tasks: [
          "Home",
          "Login",
          "Register",
          "Job",
          "Account",
          "Wallet",
          "Activity",
          "Notification"
        ]
      },
      {
        icon: require("../assets/images/ic_vn24_customer.svg"),
        customer: "Giup viec 365",
        position: "Mobile Application Developer",
        name: "ViecNha 24H Customer",
        size: 8,
        status: "waiting",
        product: [
          "http://bit.do/customer-android",
          "http://bit.do/customer-ios"
        ],
        description: "vn24_customer",
        time: "11/2019",
        platform: ["Mobile Application"],
        languages: ["JavaScript", "TypeScript"],
        technologies: [
          "React Native",
          "React Navigation",
          "React Native Firebase",
          "Redux",
          "Redux-Saga",
          "React Native Elements",
          "NodeJS",
          "ExpressJS"
        ],
        database: ["MongoDB", "Redis"],
        tools: ["App Center", "Bitbucket", "Jira", "Slack", "Zalo"],
        tasks: ["Activity", "Notification"]
      },
      {
        icon: require("../assets/images/ic_photobook.svg"),
        customer: "Muvee Technologies",
        position: "Front-End Developer",
        name: "Photobook AI",
        size: 8,
        status: "building",
        product: "http://photobook-dev.vmo.group",
        description: "photobook",
        time: "10/2019",
        platform: ["Web Application"],
        languages: ["JavaScript", "TypeScript"],
        technologies: ["NextJS", "Redux", "Redux-Saga", "NodeJS", "ExpressJS"],
        database: ["MySql", "MongoDB", "Redis"],
        tools: ["Bitbucket", "Jira", "Slack"],
        tasks: ["Home", "Login", "Register", "About", "Layout"]
      },
      {
        icon: require("../assets/images/img_bbb_crm.png"),
        customer: "Bicycle Blue Book",
        position: "Front-End Developer",
        name: "Bicycle Blue Book CRM",
        size: 15,
        status: "running",
        product: "https://admin.bicyclebluebook.com",
        description: "bbb_crm",
        time: "09/2018",
        platform: ["Web Application"],
        languages: ["JavaScript", "TypeScript", "Java"],
        technologies: [
          "ReactJS",
          "React Router",
          "Redux",
          "Redux-Saga",
          "Material-UI",
          "NodeJS",
          "ExpressJS",
          "Jhipster",
          "Spring Boot",
          "Hibernate"
        ],
        database: ["MSSQL", "MySql", "MongoDB", "Redis"],
        tools: ["Bitbucket", "Jira", "Slack", "Skype"],
        tasks: [
          "Login",
          "Shop Partners",
          "Partner Detail",
          "Approve Partner",
          "Customers",
          "Customers Detail",
          "Warehouse",
          "Warehouse Reports",
          "Inventory",
          "Inventory Detail",
          "Listing Wizard"
        ]
      },
      {
        icon: require("../assets/images/img_bbb.png"),
        customer: "Bicycle Blue Book",
        position: "Front-End Developer",
        size: 15,
        name: "Bicycle Blue Book",
        status: "running",
        product: "https://www.bicyclebluebook.com",
        description: "bbb",
        time: "02/2018",
        platform: ["Web Application"],
        languages: ["JavaScript", "TypeScript", "Java"],
        technologies: [
          "ReactJS",
          "React Router",
          "Redux",
          "Redux-Saga",
          "NodeJS",
          "ExpressJS",
          "Jhipster",
          "Spring Boot",
          "Hibernate"
        ],
        database: ["MSSQL", "MySql", "MongoDB", "Redis"],
        tools: ["Bitbucket", "Jira", "Slack", "Skype"],
        tasks: [
          "Home",
          "Marketplace",
          "Bike Detail",
          "How to",
          "Login",
          "Register",
          "Profile",
          "Order",
          "Message"
        ]
      },
      {
        icon: require("../assets/images/ic_my_coach.svg"),
        customer: "MyCoach.work",
        position: "Front-End Developer",
        name: "My Coach",
        size: 5,
        status: "drop",
        product: "http://mycoach.vmo.group",
        description: "my_coach",
        time: "01/2020 - 02/2020",
        platform: ["Web Application"],
        languages: ["JavaScript"],
        technologies: [
          "NextJS",
          "Google reCAPTCHA",
          "Google Sheets API",
          "NodeJS",
          "ExpressJS"
        ],
        database: ["Google Sheets"],
        tools: ["Bitbucket", "Slack", "Skype"],
        tasks: ["Home", "Supporter", "Policy"]
      }
    ]
  },
  {
    company: "acedev",
    link: "https://acedev.vn",
    logo: require("../assets/images/img_acedev.png"),
    status: "freelancer",
    time: null,
    projects: [
      {
        icon: require("../assets/images/img_mec_crm.png"),
        customer: "Mechanics Marketplace",
        position: "Front-End Developer",
        size: 3,
        name: "Mechanics Marketplace CRM",
        status: "finish",
        product: "https://mechanicsmarketplace.com/admin",
        description: "mec_crm",
        time: "05/2019 - 08/2019",
        platform: ["Web Application"],
        languages: ["JavaScript"],
        technologies: [
          "ReactJS",
          "React Router",
          "Mobx",
          "Material Dashboard PRO React",
          "NodeJS",
          "ExpressJS"
        ],
        database: ["MongoDB", "Redis"],
        tools: ["Bitbucket", "Jira", "Slack", "Skype"],
        tasks: [
          "Dashboard",
          "Login",
          "Forgot Password",
          "Reset Password",
          "Change Password",
          "Notifications",
          "Business",
          "Job Seeker",
          "User Console",
          "Profile",
          "Sale Rep",
          "Agreements",
          "Common List",
          "Notification Templates",
          "Page Contents",
          "Promotion Code",
          "Platform Fee",
          "Subscriptions",
          "File Management",
          "Feedback Management"
        ]
      },
      {
        icon: require("../assets/images/img_mec.png"),
        customer: "Mechanics Marketplace",
        position: "Front-End Developer",
        size: 4,
        name: "Mechanics Marketplace",
        status: "finish",
        product: "https://mechanicsmarketplace.com",
        description: "mec",
        time: "04/2019 - 06/2019",
        platform: ["Web Application"],
        languages: ["JavaScript"],
        technologies: ["NodeJS", "ExpressJS", "Pug"],
        database: ["MongoDB", "Redis"],
        tools: ["Bitbucket", "Jira", "Slack", "Skype"],
        tasks: ["Home"]
      }
    ]
  }
];

export default experience;
