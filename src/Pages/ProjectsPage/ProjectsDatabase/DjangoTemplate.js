import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const djangoTemplateTechnologies =
    <ExperienceTechnologies>
        Python, Django, PostgreSQL, uv, React, Webpack, Django REST Framework
        <br/>
        <br/>
        Reusable starter. First published in 2021.
    </ExperienceTechnologies>

const djangoTemplateDescription =
    <VisualExperience>
        <ul className={classes.bulletList}>
            <li>
                Starter I have maintained since 2021 for new Django projects. <strong>Python 3.13</strong>, <strong>Django 6.0.3</strong> (the version in <strong>uv.lock</strong>), <strong>PostgreSQL</strong> via psycopg (written for PostgreSQL 17). Dependencies are <strong>uv</strong>: <strong>uv sync</strong> installs them, and <strong>uv run</strong> uses the project virtualenv without activating it.
            </li>
            <li>
                The <strong>React</strong> app (React 19) is built with <strong>webpack</strong>. The dev server on port 3000 hot-reloads <strong>src/</strong> and proxies API calls to Django on port 8000.
            </li>
            <li>
                The API is Django REST Framework with JWT (<strong>POST /api/v1/sessions/</strong>), Swagger via drf-yasg at <strong>/api/v1/swagger/</strong>, and <strong>django-tenants</strong> (tenant and domain models). Tests run with pytest. The core router is still a stub.
            </li>
            <li>
                Google auth libraries are included (authlib, google-auth). The React screens in this repo are a finance UI titled FinApp (dashboard, transactions, accounts, concepts, investments, financial strategy). The app I run on Vercel is a later Supabase rebuild, listed separately.
            </li>
        </ul>
    </VisualExperience>;

export {djangoTemplateTechnologies, djangoTemplateDescription};
