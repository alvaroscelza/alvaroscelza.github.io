import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const PreCommitHooksTechnologies =
    <ProjectTechnologies>
        Python
        <br/>
        2018 to 2019 - 1 year
    </ProjectTechnologies>

const PreCommitHooksDescription =
    <ProjectDescription>
        A few months after starting working for BPS and familiarizing
        with <ExternalLink link="https://www.odoo.com/" text="Odoo"/> I discovered that there aren't many tools for
        static code analysis for this framework. It suggests following a set of good practices stipulated by the
        community, that include, but do not limit to, pep8. <br/>
        This implies a lot of difficulty in verifying the correct following of this good practices automatically. And
        we ended doing so manually each time we introduced a change, which took a lot of time. <br/>
        <br/>
        Wanting to fix this, I started investigating and implementing git hooks to automatically check our code, at
        least regarding those practices whose checks would be easy to implement using Python scripts. For this I
        used <ExternalLink link="https://github.com/pre-commit/pre-commit-hooks" text="pre-commit-hooks"/>. <br/>
        <br/>
        The result was a battery of scripts that would execute automatically each time one of our developers committed
        their code, thanks to Python's package <ExternalLink link="https://pre-commit.com/" text="pre-commit"/>.
    </ProjectDescription>

export {PreCommitHooksTechnologies, PreCommitHooksDescription};
