import { createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { topEmployers } from "./TopEmployers";

const STK_INDUSTRY = "STK Industry";
const AMAZON = "Amazon";
const MICROSOFT = "Microsoft";
const APEXON = "Apexon";

const isTopEmployer = (employer) => {
  return topEmployers.includes(employer);
};

const initialState = [
  {
    id: uuidv4(),
    employer: STK_INDUSTRY,
    topEmployer: isTopEmployer(STK_INDUSTRY),
    title: "React & React Native Engineer",
    description: `React / React Native Developer

    BidFTA is looking to hire a software engineer with 3+ years of React and React Native development experience and 5+ years of software development experience. We are looking for someone who works well with a team and who is passionate about building and maintaining great software that improves both our customer and employee experiences. We’re a fast paced but casual work environment that’s moving into a new growth stage and need people who are excited and passionate about the work they do and the team they are part of.
    
    Responsibilities include:
    
    Front-end mobile and react development
    Ownership of existing code base
    Maintaining, fixing and improving existing software with clean, efficient code
    Testing and deploying programs and systems
    Teaching and mentoring other members of the team
    Continuing to learn and improve your own skill set
    Requirements
    
    5+ years of experience as a Software Developer, Software Engineer or similar role
    3+ years of experience of React Native mobile development and React development.
    Able and willing to work with others on a team
    You should have professional experience of :
    Building extensible components and single-page applications with React, React Native, Next.JS, and TypeScript
    Using modern UI/UX design principles to provide a consistent experience to our users
    Writing high-quality and well-tested TypeScript/NodeJS APIs
    Building integrations with 3rd-party commercial APIs
    Can work through ambiguity and aren’t shy about asking questions to gain clarity
    Experience with software design and development in a test-driven environment
    Knowledge of coding languages and Infrastructure:
    Java, Node.JS, Amazon Lambda, MySQL, REST API
    AWS RDS, ElasticSearch Service, DynamoDB, CloudFront, Elastic Container Service, BitBucket Pipeline
    Ability to learn new languages and technologies
    Resourcefulness and troubleshooting aptitude
    Attention to detail
    BSc/BA in Computer Science, Engineering or a related field
    About Fast Track It:
    
    Fast Track It is an online auction marketplace with over 12 years of experience in connecting buyers and sellers nationwide. Join a rapidly growing team of young and seasoned professionals in creating the ultimate bidding experience and the best deals anywhere.
    
    Salary Range $85K-$120K
    
    Benefits:
    
    Remote Position is acceptable
    
    Vacation Starting with 3 Weeks
    
    Other Benefits: Health Insurance, Dental, 401K contribution
    
    Job Type: Full-time
    
    Pay: $85,000.00 - $120,000.00 per year
    
    Benefits:
    
    401(k)
    Dental insurance
    Flexible schedule
    Health insurance
    Paid time off
    Vision insurance
    Schedule:
    
    Monday to Friday
    Supplemental Pay:
    
    Bonus pay
    Language:
    
    English (Required)
    Work Location: Remote`,
    level: { junior: true, middle: true, senior: true },
    location: { maps: { lat: 44.4268, lng: 26.1025 }, city: "Bucharest" },
    salary: "2000-3000",
    posts: "2",
  },
  {
    id: uuidv4(),
    employer: APEXON,
    topEmployer: isTopEmployer(APEXON),
    title: "PHP Developer with Laravel & React Remote Job",
    description: `Our client is looking PHP Developer in long term project in Lake Mary, FL (Remote). Below are the detailed requirements.

    Job Title : PHP Developer
    
    Location : Lake Mary, FL
    
    Duration : 12+ Months
    
    Qualification:
    
    Bachelor's degree preferably in Computer Science, Information technology, Computer Engineering, or related IT discipline or equivalent experience with 10+ Minimum Experience.
    Expertise in Magento, PHP, MySQL
    Technical roles with hands on technical and functional delivery expectations.
    Also, any AMS/Operate/ITIL experience is a nice to have.e`,
    level: { junior: true, middle: true, senior: false },
    location: { maps: { lat: 51.5072, lng: 0.1276 }, city: "London" },
    salary: "2500-3000",
    posts: "3",
  },
  {
    id: uuidv4(),
    employer: "North Carolina State University",
    topEmployer: false,
    title: "Junior PHP Developer",
    description: `Posting Information
    Posting Number
    PG191578EP
    
    Internal Recruitment
    No
    
    Working Title
    Junior PHP Developer
    
    Anticipated Hiring Range
    $65,000 - $72,000
    
    Work Schedule
    Monday – Friday, 8am-5pm with occasional overtime. Flexible scheduling is possible depending on business needs.
    
    Job Location
    Raleigh, NC
    
    Department
    Digital Education and Learning Technology Applications - DELTA
    
    About the Department
    DELTA’s role within the Office of the Provost is to advance the integration and support of learning technologies in NC State’s academic programs and courses, both on campus and at a distance. DELTA supports distance-based credit programs and courses for the university, and provides enterprise academic technology and instructional support services for all modes of course delivery. Working with NC State instructors and partners, DELTA leads the way in designing, creating, implementing and supporting extraordinary digital learning experiences for our community of learners. DELTA applies expertise in technologies and pedagogies to create and nurture innovative, effective and impactful digital learning experiences for our community of instructors and learners with a collaborative, service-oriented and innovative mindset.
    
    Essential Job Duties
    This position will be a member of either the Data, Integrations and Custom Applications team or the Open Source Applications team, both of which are within Educational Technology Services (ETS) in DELTA. The Data, Integrations and Custom Applications team is responsible for analyzing datasets, integrating data and systems, and developing custom applications that support DELTA and NC State’s learning technology needs. The Open Source Applications team is responsible for maintaining, upgrading, and developing new features for open source applications such as Moodle, WordPress, and DELTA’s own Syllabus Tool. This position will play a major role in tier 3 application support, technical documentation, report generation, and contributions to development projects assigned to their respective team.
    
    Duties and responsibilities include:
    Respond to user support requests, identify client issues, and correct problems using basic debugging methods.
    Document patches and procedural changes for future reference.
    Communicate with other members of DELTA to work towards resolving issues discovered during testing.
    Contribute and document code via Git repositories both internally and with the open source communities.
    Communicate via GitHub/JIRA to document and discuss patches both internally and with the open source communities.
    Generate reports to document testing phases and software usage to assist with software evaluation.
    Evaluate feature requests for technical implications and long term maintainability.
    
    Other Responsibilities
    Other duties as assigned.
    
    Qualifications
    Minimum Education and Experience
    Must have demonstrated experience with software development processes in a work environment.
    Bachelor’s degree in Computer Science or a related field with 1-3 years experience OR equivalent combination of training education/experience
    
    Other Required Qualifications
    Proficient with current web design languages; including HTML, CSS (sometimes with SCSS or SASS), and JavaScript.
    Competent at developing and deciphering programming languages including, but not limited to PHP and SQL.
    Competent at analyzing issues and determining possible solutions.
    Capable of interacting with a project management system to follow and report progress.
    Able to manage own task list with prioritization guidance from a supervisor.
    Ability to develop written documents – procedures, summaries, reports, etc.
    Familiar with providing tier 3 level support for issues involving unexpected behavior with the application interface or backend code.
    
    Preferred Qualifications
    Proficient at translating advanced technical issues into terms that support personnel and/or customers can understand.
    Specific knowledge of front-end frameworks and libraries such as jQuery, Mustache, and/or Bootstrap.
    Competent at programming and reading object oriented programming and techniques.
    Capable of communicating and documenting procedures to team members clearly and in a timely manner.
    Able to use Git and best practices when writing updates and changes to code bases.
    Able to develop documentation (procedures, summaries, reports, etc.) as needed for other developers and end-users.
    
    Required License(s) or Certification(s)
    N/A
    
    Valid NC Driver's License required
    No
    
    Commercial Driver's License required
    No
    
    Recruitment Dates and Special Instructions
    Job Open Date
    03/07/2022
    
    Anticipated Close Date
    Open until filled
    
    Special Instructions to Applicants
    DELTA anticipates two hires from this posting.
    
    Position Details
    Position Number
    00109169
    
    Position Type
    EHRA Non-Faculty
    
    Full Time Equivalent (FTE) (1.0 = 40 hours/week)
    1.0
    
    Appointment
    12 Month Recurring
    
    Mandatory Designation - Adverse Weather
    Non Mandatory - Adverse Weather
    
    Mandatory Designation - Emergency Events
    Non Mandatory - Emergency Event
    
    Is this position partially or fully funded on ARRA stimulus monies?
    No
    
    Department ID
    339001 - DELTA
    
    AA/EEO
    NC State University is an equal opportunity and affirmative action employer. All qualified applicants will receive consideration for employment without regard to race, color, national origin, religion, sex, gender identity, age, sexual orientation, genetic information, status as an individual with a disability, or status as a protected veteran.
    
    If you have general questions about the application process, you may contact Human Resources at (919) 515-2135 or workatncstate@ncsu.edu. Individuals with disabilities requiring disability-related accommodations in the application and interview process, please call 919-515-3148.
    
    Final candidates are subject to criminal & sex offender background checks. Some vacancies also require credit or motor vehicle checks. Degree(s) must be obtained prior to start date in order to meet qualifications and receive credit.
    
    NC State University participates in E-Verify. Federal law requires all employers to verify the identity and employment eligibility of all persons hired to work in the United States.`,
    level: { junior: true, middle: true, senior: false },
    location: { maps: { lat: 19.4326, lng: 99.1332 }, city: "Mexico City" },
    salary: "2000-2500",
    posts: "1",
  },
  {
    id: uuidv4(),
    employer: "Paradyme Management",
    topEmployer: false,
    title: "React Developer Wanted",
    description: `Overview: Paradyme Management is a rapidly growing government technology leader that puts service first, for its customers, its team and the communities it supports. Paradyme harnesses DevSecOps and Agile development processes to deliver exceptional results for digital transformations. With headquarters office in Tysons Corner, VA, Paradyme’s award-winning culture sets it apart through its team’s deep commitment to service and collaboration with its customers, each other and the community. Learn more at www.paradymemanagement.com.

    Paradyme Management is hiring an applications engineer to support mission critical programs.
    
    Responsibilities
    
    Implementation and development of large multi-tier API / web services, data integrations and related web applications.
    Implementation and development of web based user interfaces using various java script librarys, CSS, and HTML
    Advise customer on understanding of API / web service architectures and concerns - Microservices, Service Oriented Architecture, security, high availability, load, performance, encryption etc…
    Development of RESTful APIs using JSON, RSS, NewsML and other API formats.
    Experience with event-based and message-driven distributed systems eg. JMS, Celery, RabbitMQ, Kafka etc.
    Development with data stores and related topics - NoSQL and RDBMS - eg. Memcached, Redis, PostgreSQL, MySQL etc.
    Working with dependency management, build & release and automation tools (Pip, Maven, Jenkins/Bamboo, Puppet, Docker, chef, etc.)
    Experience with programming languages and related frameworks and libraries – primarily Java and Spring framework.
    Interfacing with leadership, team members, other project teams, and customers in a professional and patient manner
    Responsibilities:
    Qualifications:
    
    Bachelor’s degree is required: Engineering, Computer Science or Information Technology or related field is strongly preferred
    Experience in a professional environment working on a team
    Nice to Have:
    
    Hands-on experience deploying Applications to IaaS and PaaS, such as Amazon AWS, Microsoft Azure, or Google Cloud Services.
    Hands-on experience J2EE application development experience
    Hands-on experience with Spring framework
    Experience with technologies used for service registry like Etcd, Consul, Zookeeper, Curator, Eureka etc.
    Strong understanding of HTTP protocol, WebSocket, SSE, and other web technologies.
    Ability to have technical conversations with Product and Business leadership, in addition to Engineering and Support/Operations teams.
    Conveys highly technical concepts and information in written form to technical and non-technical audiences.
    The ability to work on multiple concurrent projects is essential. Strong self -motivation and the ability to work with minimal supervision.
    Must be a team-oriented individual, energetic, result & delivery oriented, with a keen interest on quality and the ability to meet deadlines.
    Ability to work in an agile environment
    Physical Requirements: These are the essential physical requirements needed to successfully perform the job.
    
    Sedentary work.
    Lifting up to 10 pounds unassisted.
    May require standing or walking up to 2-hours per day.
    Requires sitting up to 8-hours per day.
    May require frequent bending, reaching, squatting, pushing, and pulling.
    Fine repetitive motor skills with your hands, wrists, and fingers in coordination with your eyes.
    Hearing: Adequate to perform job duties in person, over video, and over the telephone.
    Speaking: Able to communicate clearly in person, over video, and over the telephone.
    Vision: Visual acuity adequate to perform job duties, including reading information from printed sources and computer screens.
    Other: Work may be performed in an office environment, which may involve frequent contact with staff and the public. Work may be stressful at times.
    EEO Statement: Paradyme Management Inc. is a consulting organization that aligns information technology and business processes to drive measurable results. As an organization, Paradyme focuses on providing exceptional customer service to its clients, welcomes every employee into an atmosphere rich in collaboration and saturated in culture. Paradyme employs smart, dedicated, and driven employees who not only embody the mission and vision of Paradyme, but aid in supporting and strengthening organizational culture overall.
    
    Paradyme is a federal contractor and an EEO and an Affirmative Action Employer. All employment decisions shall be made without regard to age, race, creed, color, religion, sex, national origin, pregnancy-related disability, physical or mental disability, genetic information, sexual orientation, marital status, familial status, personal appearance, occupation, citizenship, veteran or military status, gender identity or expression, or any other characteristic protected by federal, state or local law.
    
    Job Type: Full-time`,
    level: { junior: true, middle: false, senior: false },
    location: { maps: { lat: 34.0736, lng: 118.4004 }, city: "Beverly Hills" },
    salary: "1700-2300",
    posts: "1",
  },
  {
    id: uuidv4(),
    employer: "Accenture",
    topEmployer: false,
    title: "Java Engineer",
    description: `Accenture Flex offers you the flexibility of local fixed duration project based work powered by Accenture, a leading global professional services company. Accenture is consistently recognized on FORTUNE's 100 Best Companies to Work for and Diversity Inc's Top 50 Companies for Diversity lists.

    As an Accenture Flex employee, you will apply your skills and experience to help drive business transformation for leading organizations and communities. In addition to delivering innovative solutions for Accenture s clients, you will work with a highly skilled, diverse network of people across Accenture businesses who are using the latest emerging technologies to address today's biggest business challenges.
    
    You will receive competitive rewards and access to benefits programs and world class learning resources. Accenture Flex employees work in their local metro area onsite at the project significantly reducing and or eliminating the demands to travel.
    
    Job Description:
    
    Follow the Agile development principles and practices
    
    Ask questions when things do not look right, make suggestions to PO and BA, review acceptance criteria and test their deliverables before handing it over to QA
    
    Understand the Functional Technical Design and perform build activities
    
    Contribute and create technical design for their features being developed
    
    Take initiative and show creativity in solving complex problems
    
    Consistently deliver a high volume of story points relative to their team
    
    Deliver error free product features
    
    Pair Programming as needed
    
    Improve code quality regularly before deploying to Production
    
    Leading the team of developers if available and given a chance
    
    Share their knowledge with others and have a passion for learning from others
    
    Follow the Agile development principles and practices.
    
    Ask questions when things do not look right, make suggestions to PO and BA, review acceptance criteria and test their deliverables before handing it over to QA.
    
    Understand the Functional/Technical Design and perform build activities.
    
    Contribute and create technical design for their features being developed.
    
    Take initiative and show creativity in solving complex problems.
    
    Consistently deliver a high volume of story points relative to their team.
    
    Deliver error free product features.
    
    Pair Programming as needed.
    
    Improve code quality regularly before deploying to Production.
    
    Leading the team of developers if available and given a chance.
    
    Share their knowledge with others and have a passion for learning from others
    
    100% remote role
    
    
    Basic Qualifications:
    
    Minimum 6 years of experience with software engineering
    
    Minimum 4 years of experience with JVM based languages such as Java, Groovy, or Kotlin
    
    Minimum 1 year of experience with NoSQL databases such as Cassandra or MongoDB
    
    Minimum 1 year of experience in Test Driven Development
    
    High School Diploma or GED
    
    Preferred Qualifications:
    
    Bachelor's degree in IT, Computer Science, Engineering, or related field OR equivalent combination of education and/or experience
    
    Willingness to pair program as needed
    
    Experience with Cloud Computing platforms (e.g. Amazon AWS, Microsoft Azure, Google Compute Engine, OpenStack, Rackspace cloud, etc.)
    
    Knowledge of and working experience with open source software (Apache, Tomcat, Memcached, etc.).
    
    Knowledge of networks, security, firewalls, load balancers, DNS, and other infrastructure components is a plus.
    
    Service development (REST, HTTP, JSON) Spring Framework RabbitMq, IBM MQ, Kafka Jenkins pipelines (CI/CD) Docker Linux and Mac OSX Demonstrated experience in an Agile environment Exp
    
    As required by Colorado Law under the Equal Pay for Equal Work Act, Accenture provides a reasonable range of compensation for roles that may be hired in Colorado. Actual compensation is influenced by a wide array of factors including but not limited to skill set, level of experience, and specific office location. For the state of Colorado only, the range of starting pay for this role is $21.63- $54.18 per hour and information on benefits is here .
    
    
    COVID-19 update:
    
    
    The safety and well-being of our candidates, our people and their families continues to be a top priority. Until travel restrictions change, interviews will continue to be conducted virtually.
    
    
    Subject to applicable law, please be aware that Accenture requires all employees to be fully vaccinated as a condition of employment. Accenture will consider requests for accommodation to this vaccination requirement during the recruiting process.
    
    
    What We Believe
    
    
    We have an unwavering commitment to diversity with the aim that every one of our people has a full sense of belonging within our organization. As a business imperative, every person at Accenture has the responsibility to create and sustain an inclusive environment.
    
    
    Inclusion and diversity are fundamental to our culture and core values. Our rich diversity makes us more innovative and more creative, which helps us better serve our clients and our communities. Read more here
    
    
    Equal Employment Opportunity Statement
    
    
    Accenture is an Equal Opportunity Employer. We believe that no one should be discriminated against because of their differences, such as age, disability, ethnicity, gender, gender identity and expression, religion or sexual orientation.
    
    
    All employment decisions shall be made without regard to age, race, creed, color, religion, sex, national origin, ancestry, disability status, veteran status, sexual orientation, gender identity or expression, genetic information, marital status, citizenship status or any other basis as protected by federal, state, or local law.
    
    
    Accenture is committed to providing veteran employment opportunities to our service men and women.
    
    
    For details, view a copy of the Accenture Equal Opportunity and Affirmative Action Policy Statement.
    
    
    Requesting An Accommodation
    
    
    Accenture is committed to providing equal employment opportunities for persons with disabilities or religious observances, including reasonable accommodation when needed. If you are hired by Accenture and require accommodation to perform the essential functions of your role, you will be asked to participate in our reasonable accommodation process. Accommodations made to facilitate the recruiting process are not a guarantee of future or continued accommodations once hired.
    
    
    If you would like to be considered for employment opportunities with Accenture and have accommodation needs for a disability or religious observance, please call us toll free at 1 (877) 889-9009, send us an email or speak with your recruiter.
    
    
    Other Employment Statements
    
    
    Applicants for employment in the US must have work authorization that does not now or in the future require sponsorship of a visa for employment authorization in the United States.
    
    
    Candidates who are currently employed by a client of Accenture or an affiliated Accenture business may not be eligible for consideration.
    
    
    Job candidates will not be obligated to disclose sealed or expunged records of conviction or arrest as part of the hiring process.
    
    
    The Company will not discharge or in any other manner discriminate against employees or applicants because they have inquired about, discussed, or disclosed their own pay or the pay of another employee or applicant. Additionally, employees who have access to the compensation information of other employees or applicants as a part of their essential job functions cannot disclose the pay of other employees or applicants to individuals who do not otherwise have access to compensation information, unless the disclosure is (a) in response to a formal complaint or charge, (b) in furtherance of an investigation, proceeding, hearing, or action, including an investigation conducted by the employer, or (c) consistent with the Company's legal duty to furnish information.`,
    level: { junior: true, middle: true, senior: false },
    location: { maps: { lat: 52.52, lng: 13.405 }, city: "Berlin" },
    salary: "2000-2200",
    posts: "3",
  },
  {
    id: uuidv4(),
    employer: "Humanity",
    topEmployer: isTopEmployer(STK_INDUSTRY),
    title: "CSS & HTML Developer",
    description: `Company Description

    Stealth company that offers the opportunity to use your skills to save 30% of the oceans by 2030.
    
    
    Job Description
    
    We have a need for a qualified Front End developer.
    
    Take responsibility of a complete UI product development from solution design, implementation of proof of concept, a complete production coding.
    
    Guide leadership team in making technical decisions regarding cutting edge UI technologies.
    
    Work alongside with other programmers and lead a team of several developers.
    
    Take full responsibility of documentation and production code deployment.
    
    
    Qualifications
    
    Web markup, including HTML5, CSS3 (proficient knowledge)
    
    Client-side scripting, JavaScript frameworks and JQuery
    
    JavaScript libraries and MVC frameworks (Angular, React JS or any other)
    
    Server-side CSS like LESS,SASS (basics)
    
    Candidate should also have some working experience on server side technologies either in python or Java
    
    Familiarity with Agile concepts, and experience practicing SCRUM.
    
    Additional knowledge technologies such as of redux.
    
    
    Additional Information
    
    We are an equal employment opportunity employer (Females/Minorities/ Protected Veterans/Disabled), values the diversity of our workforce and the knowledge of our people.`,
    level: { junior: true, middle: true, senior: false },
    location: { maps: { lat: 41.8781, lng: 87.6298 }, city: "Chicago" },
    salary: "1000-3000",
    posts: "4",
  },
  {
    id: uuidv4(),
    employer: AMAZON,
    topEmployer: isTopEmployer(AMAZON),
    title: "PHP Backend Developer",
    description:
      `Join now our team of motivated developers to create products that impact the world. 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      ` +
      "Here are our requirements: - PHP Knowledge - HTML/CSS - Seriosity - 2 years experience",
    level: { junior: false, middle: false, senior: true },
    location: { maps: { lat: 44.4268, lng: 26.1025 }, city: "Bucharest" },
  },
  {
    id: uuidv4(),
    employer: MICROSOFT,
    topEmployer: isTopEmployer(MICROSOFT),
    title: "QA Tester",
    description: `Join now our team of motivated developers to create products that impact the world. 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      Here are our requirements: 
      - Testing Knowledge
      - HTML/CSS
      - Seriosity
      - 1 year experience`,
    level: { junior: false, middle: false, senior: true },
    location: { maps: { lat: 52.52, lng: 13.405 }, city: "Berlin" },
    salary: "2000-3000",
    posts: "2",
  },
  {
    id: uuidv4(),
    employer: STK_INDUSTRY,
    topEmployer: isTopEmployer(STK_INDUSTRY),
    title: "Javascript Internship",
    description: `Join now our team of motivated developers to create products that impact the world. 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      Here are our requirements: 
      - JS Knowledge
      - HTML/CSS
      - Seriosity
      - 1 year experience`,
    level: { junior: true, middle: true, senior: false },
    location: { maps: { lat: 59.9139, lng: 10.7522 }, city: "Oslo" },
    salary: "2000-3000",
    posts: "2",
  },
];

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    addList: (state, action) => {
      state = action.payload;
    },
    removeJob: (state, action) => {
      const newState = state.filter((job) => job.id !== action.payload.id);
      return newState;
    },
  },
});

export const { addJob, removeJob, addList } = jobsSlice.actions;

export default jobsSlice.reducer;
