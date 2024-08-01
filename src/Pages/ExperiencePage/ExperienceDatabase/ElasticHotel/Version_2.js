import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";

const versionTwoTechnologies =
    <ExperienceTechnologies>
      Python, Django, PostgreSQL, DevOps, Terraform, AWS, GitHub, Git, Jira
      <br/>
      <br/>
      2023 to 2024 - 11 months
    </ExperienceTechnologies>

const versionTwoDescription =
    <ExperienceDescription>
      I suggested migrating from Flask to Django since it's a more suitable tech stack for a monolithic
      application. Along with DRF it is also full equipped for complex and scalable APIs. This allowed us to split
      our frontend and backend in a Django-React architecture. For which we hired a new frontend developer.

      We also took the opportunity to refactor the codebase, which was a bit messy. We implemented a new architecture
      based on TDD. We also implemented a new CI/CD pipeline with Terraform and AWS. This allowed us to have a more
      reliable and scalable infrastructure.

      The result is a more organized and scalable project, which takes less than half the time to implement new
      features or fix bugs.

      I worked in parallel in both version 1 and 2 until moving entirely to version 2 around the end of 2023.
    </ExperienceDescription>;

export { versionTwoTechnologies, versionTwoDescription };
