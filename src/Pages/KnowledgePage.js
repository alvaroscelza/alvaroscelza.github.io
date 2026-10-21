import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {knowledgeData, seniorityDescriptions} from "../utils/knowledgeData";
import KnowledgeSearch from "../components/UI/KnowledgeSearch";

const categoryOrder = [
    'Programming Languages',
    'Backend Frameworks',
    'Frontend & Desktop',
    'Software Architecture & Design',
    'Generative AI & LLMs',
    'Machine Learning & Data Science',
    'Data Engineering',
    'Database Engines and Managers',
    'Cloud',
    'DevOps & CI/CD',
    'Testing & QA',
    'Project Management',
    'Leadership & Soft Skills',
    'IDEs & Editors',
    'Operating Systems'
];

const KnowledgePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Skills & Technologies"
    }, []);

    const extractSkillsByCategory = () => {
        const categories = {};
        const seenSkillsByCategory = {};
        categoryOrder.forEach(category => {
            categories[category] = [];
            seenSkillsByCategory[category] = new Set();
        });
        const skillSeniorityMap = {};

        knowledgeData.forEach(([technology, level, category]) => {
            if (!technology || !category) {
                return;
            }
            if (!seenSkillsByCategory[category]) {
                categories[category] = [];
                seenSkillsByCategory[category] = new Set();
            }
            if (seenSkillsByCategory[category].has(technology)) {
                return;
            }
            seenSkillsByCategory[category].add(technology);
            categories[category].push(technology);
            skillSeniorityMap[technology] = level;
        });

        return { categories, skillSeniorityMap };
    };

    const { categories: skillsByCategory, skillSeniorityMap } = extractSkillsByCategory();
    const orderedCategories = [
        ...categoryOrder,
        ...Object.keys(skillsByCategory).filter(category => !categoryOrder.includes(category))
    ];

    return (
        <>
            <h1 className={classes.h1}>
                Skills & Technologies
            </h1>
            <p>
                With 10+ years of software development experience, I've been learning and using a wide range of
                skills, technologies and practices. You'll find them listed below, and the seniority is shown when you
                hover over each one.
            </p>
            <KnowledgeSearch />

            <div className={classes.skillsSummary}>
                {orderedCategories.map(category => (
                    skillsByCategory[category].length > 0 && (
                        <div key={category} className={classes.skillsCategory}>
                            <div className={classes.skillsCategoryTitle}>{category}:</div>
                            <div className={classes.skillsTags}>
                                {skillsByCategory[category].map((skill, index) => {
                                    const seniority = skillSeniorityMap[skill];
                                    const tooltipText = seniority 
                                        ? `${seniority}: ${seniorityDescriptions[seniority] || ''}`
                                        : '';
                                    return (
                                        <span 
                                            key={index} 
                                            className={`${classes.skillTag} ${seniority ? classes.skillTagWithTooltip : ''}`}
                                            data-seniority={tooltipText}
                                        >
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    )
                ))}
            </div>

            <p>Is something missing? <Link to="/contact" className={classes.link}>Let me know!</Link> :)</p>
        </>
    );
}

export default KnowledgePage;
