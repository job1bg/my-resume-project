// Get HTML elements resume

// Header - title name
const titleName = document.getElementById('titleName');
titleName.textContent = 'Branislav Jovanović';

// Personal Information - Address
const addressText = document.getElementById('addressText');
addressText.childNodes[1].textContent = 'Bulevar JNA 30';

// Personal Information - Birthday
const birthdayText = document.getElementById('birthdayText');
birthdayText.childNodes[1].textContent = 'January 1, 1996';

// TODO: Could be array
// Personal Information - Languages
const languagesText = document.getElementById('languagesText');
languagesText.childNodes[1].textContent = 'Serbian, English';

// Education - Title
const educationalTitleText = document.querySelector('#educationalTitleText strong');
educationalTitleText.textContent = 'Bachelor of Science in Computer Science';

// Education - Faculty Name
const facultyNameText = document.querySelector('#facultyNameText em');
facultyNameText.textContent = 'Faculty of Sciences';

// Education - Faculty Graduation
const graduationText = document.getElementById('graduationText');
graduationText.textContent = '2020';

// Skills
const skillsList = document.getElementById('skillsList');
const skills = [
    'Proficient in Swift and iOS Development',
    'Experience with TypeScript and JavaScript',
    'Version control using Git',
    'Excellent problem-solving and communication skills'
];

skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});

// Experience
const companyExperience = document.getElementById('experience');

const experiencesObjectsArray = [
    // Add experience object
    {
        companyNameText: 'Robert Bosch d.o.o.',
        workPeriodStartText: 2021,
        workPeriodEndText: 'Present',
        companyRoleText: 'iOS Developer',
        tasksList: [
            'Developed and maintained iOS applications using Swift',
            'Collaborated with cross-functional teams to design scalable solutions'
        ]
    },
    {
        companyNameText: 'Robert Bosch d.o.o.',
        workPeriodStartText: 2021,
        workPeriodEndText: 'Present',
        companyRoleText: 'Frontend Developer',
        tasksList: [
            'Currently learning and developing web applications using HTML, CSS, and TypeScript'
        ]
    },
]

const companyNames = []

experiencesObjectsArray.forEach(experience => {
    // Create elements
    const experienceContainer = document.createElement('div');

    const companyNameText = document.createElement('h3');
    const workPeriodText = document.createElement('p');
    const workPeriodStartText = document.createElement('em');
    const workPeriodEndText = document.createElement('em');
    const workPeriodHyphenText = document.createElement('p');
    const companyRoleText = document.createElement('p');
    const tasksList = document.createElement('ul');

    // Assign texts
    companyNameText.textContent = experience.companyNameText;
    workPeriodStartText.textContent = experience.workPeriodStartText;
    workPeriodEndText.textContent = experience.workPeriodEndText;
    workPeriodHyphenText.textContent = ' - ';
    companyRoleText.textContent = experience.companyRoleText;
    companyRoleText.style.fontWeight = 'bold';

    // Append Work Period Children
    workPeriodText.appendChild(workPeriodStartText);
    workPeriodText.appendChild(workPeriodHyphenText);
    workPeriodText.appendChild(workPeriodEndText);
    workPeriodText.className = 'work-period-container';

    // Append All Elements Excepts Tasks To Root
    // Check If It's Different Position But In Same Company
    if (!companyNames.includes(companyNameText.textContent)) {
        experienceContainer.appendChild(companyNameText);
        experienceContainer.appendChild(workPeriodText);
    }
    experienceContainer.appendChild(companyRoleText);

    // Append Tasks To Root
    experience.tasksList.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        tasksList.appendChild(listItem);
    });
    experienceContainer.appendChild(tasksList);

    // Insert Root Into Container
    companyExperience.appendChild(experienceContainer);

    // Append Company Name
    companyNames.push(companyNameText.textContent);
});

// Projects
const projects = document.getElementById('projects');

const projectsObjectsArray = [
    // Add project object
    {
        projectName: 'My iOS Project',
        projectDescriptionList: [
            'Developed using Swift, SwiftUI and UI',
            'Google Maps SDK',
            'Offline-first approach - Core Data',
            'MVVM Architecture'
        ]
    },
    {
        projectName: 'My Java Project',
        projectDescriptionList: [
            'Developed a library management system using Java',
            'Integrated MySQL for database management',
            'Implemented multi-threading for concurrent operations'
        ]
    },
    {
        projectName: 'My TypeScript Project',
        projectDescriptionList: [
            'Building my resume web page',
            'Developed using HTML/CSS'
        ]
    },
]

projectsObjectsArray.forEach(project => {
    // Create elements
    const projectContainer = document.createElement('div');

    const projectNameText = document.createElement('p');
    const descriptionList = document.createElement('ul');

    // Assign texts
    projectNameText.textContent = project.projectName;
    projectNameText.style.fontWeight = 'bold';

    // Append Project Name To Root
    projectContainer.appendChild(projectNameText);

    // Append Description To Root
    project.projectDescriptionList.forEach(description => {
        const listItem = document.createElement('li');
        listItem.textContent = description;
        descriptionList.appendChild(listItem);
    });
    projectContainer.appendChild(descriptionList);

    // Insert Root Into Container
    projects.appendChild(projectContainer);
});


