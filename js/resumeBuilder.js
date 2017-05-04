// Takes a template string and replaces all placeholder with the provided value
function replace(template, value) {
    return template.replace("%data%", value);
}

var bio = {
    name: "Sanduni Naveendra Usgoda Arachchige",
    role: "Student",
    contacts: {
        mobile: "+49-(0)123-123 12 123",
        email: "sandu.navee@gmail.com",
        githublink: "https://github.com/sanavee",
        github: "sanavee",
        location: "Hamburg, Germany"
    },
    welcomeMessage: "Hello",
    skills: ["Team work", "Flexibility"],
    biopic: "images/fry.jpg",
};

function getSkillItem(skill) {
    return replace(HTMLskills, skill);
}

bio.display = function() {
    var contactInformation = replace(HTMLmobile, bio.contacts.mobile) +
        replace(HTMLemail, bio.contacts.email) +
        replace(HTMLgithub, bio.contacts.github) +
        replace(HTMLlocation, bio.contacts.location);
    $("#topContacts").append(contactInformation);
    $("#footerContacts").append(contactInformation);
    $("#header").prepend(replace(HTMLheaderName, bio.name) + replace(HTMLheaderRole, bio.role));
    $("#header").append(
        replace(HTMLbioPic, bio.biopic) +
        replace(HTMLwelcomeMsg, bio.welcomeMessage) +
        HTMLskillsStart
    );
    $("#skills").append(bio.skills.map(getSkillItem).join(''));
};

var work = {
    jobs: [

        {
            employer: "HNB Bank",
            title: "Training as a Banker",
            location: "Colombo, Sri Lanka",
            dates: "2006-07",
            description: "Recording and organising loan information"

        },
        {
            employer: "Wooden Product Designhome ",
            title: "Customer service",
            location: "Colombo, Sri Lanka",
            dates: "2007-10",
            description: "Take orders, determine charges, and oversee billing or payments"

        },
        {
            employer: "Aupair Geust family ",
            title: "Aupair",
            location: "Hamburg , Germany",
            dates: "2010-12",
            description: "take care of the children"
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $(HTMLworkStart).append(
            replace(HTMLworkEmployer, job.employer) +
            replace(HTMLworkTitle, job.title) +
            replace(HTMLworkDates, job.dates) +
            replace(HTMLworkLocation, job.location) +
            replace(HTMLworkDescription, job.description)
        ).appendTo('#workExperience');
    });
};

var projects = {
    projects: [{
            title: "Showroom display creation",
            dates: "2009",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, lectus sed efficitur sollicitudin, nisl nunc rutrum est, a imperdiet quam dolor nec turpis. Pellentesque suscipit aliquam ante. Praesent et dolor nunc.",
            images: ["images/project_1.jpg"]
        },
        {
            title: "Code Your Own Quiz",
            dates: "2016",
            description: "Nullam suscipit sem eu risus vulputate vulputate. Etiam id nunc porta, dignissim sem a, pretium leo. Duis malesuada dapibus eros, sed elementum lacus.",
            images: ["images/project_2.jpg"]
        }
    ]
};

function getProjectImage(image) {
    return replace(HTMLprojectImage, image);
}

projects.display = function() {
    projects.projects.forEach(function(project) {
        $(HTMLprojectStart).append(
            replace(HTMLprojectTitle, project.title) +
            replace(HTMLprojectDates, project.dates) +
            replace(HTMLprojectDescription, project.description) +
            project.images.map(getProjectImage).join('')
        ).appendTo('#projects');
    });
};

var education = {
    schools: [{
            name: "High School",
            location: "Colombo, Sri Lanka",
            degree: "High School Diploma",
            majors: [
                "Accounting",
                "Economics"
            ],
            dates: "From: 1993 To: 2006",
            url: "#"
        },
        {
            name: "Goethe Institiute",
            location: "Colombo, Sri Lanka",
            degree: "Goethe Certificate B2",
            dates: "From: 2007 To: 2009",
            majors: ["German"],
            url: "#"
        },
        {
            name: "University Hamburg",
            location: "Hamburg. Germany",
            majors: ["Business Managment"],
            dates: "From: 2015",
            url: "https://www.bwl.uni-hamburg.de/",
            degree: "Bachelor of Arts"
        }
    ],
    onlineCourses: [{
        title: "Intro to Programming Nanodegree",
        school: "Udacity",
        dates: "2016/17",
        url: "http://www.udacity.com"
    }]
};

function getMajorItem(major) {
    return replace(HTMLschoolMajor, major);
}

education.display = function() {
    education.schools.forEach(function(school) {
        $(HTMLschoolStart).append(
            replace(HTMLschoolName, school.name) +
            replace(HTMLschoolDegree, school.degree) +
            replace(HTMLschoolDates, school.dates) +
            replace(HTMLschoolLocation, school.location) +
            school.majors.map(getMajorItem).join('')
        ).appendTo('#education');
    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        $(HTMLschoolStart).append(
            replace(HTMLonlineTitle, course.title) +
            replace(HTMLonlineSchool, course.school) +
            replace(HTMLonlineDates, course.dates) +
            replace(HTMLonlineURL, course.url)
        ).appendTo('#education');
    });

};

function addMap() {
    $("#mapDiv").append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
addMap();