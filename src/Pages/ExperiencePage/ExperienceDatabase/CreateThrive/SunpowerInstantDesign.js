import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";

const sunpowerInstantDesignTechnologies =
    <ExperienceTechnologies>
        Python, Flask, PostgreSQL, Git, JavaScript, ReactJS, VueJS, Docker, Docker-Compose, Redis, Celery, Flower, GitHub, Linux, Ubuntu, 
        CircleCI, Datadog, Neural-Networks, CUDA, uWSGI<br/>
        <br/>
        January 2022 to February 2023 - 1 year 2 months
    </ExperienceTechnologies>

const sunpowerInstantDesignDescription =
    <ExperienceDescription>
        Sunpower is one of CreateThrive's biggest clients. Its project is called InstantDesign, whose objective is the automatic generation of solar panels grids for residences through the usage of CUDA, Neural Networks and other technologies. It offers its features to the rest of the company's teams through and API built with Flask, but it also relies on a React/Vue frontend for internal tests. Additionally, due to the enormous complexity of the project, it's necessary the usage of Docker and Docker-Compose for its installation, development and testing. This includes the need to develop attaching the IDE to the Docker-Compose containers. My tasks included project maintenance and technical debt reduction. There's been an immense amount of problems raising in this project: it was developed 3 years ago and the original development team has left the company.
    </ExperienceDescription>;

export {sunpowerInstantDesignTechnologies, sunpowerInstantDesignDescription};
