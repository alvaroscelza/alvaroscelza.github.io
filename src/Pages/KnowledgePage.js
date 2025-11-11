import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {normalizeSeniority, knowledgeData, seniorityDescriptions} from "../utils/knowledgeData";
import KnowledgeSearch from "../components/UI/KnowledgeSearch";

const KnowledgePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Knowledge"
    }, []);

    const extractSkillsByCategory = () => {
        const categories = {
            'Programming Languages and Frameworks': [],
            'Artificial Intelligence (AI)': [],
            'Database Engines and Managers': [],
            'Versioning and CI/CD': [],
            'Cloud': [],
            'Project Management': [],
            'Operative Systems': [],
            'IDEs': [],
            'Management Tools': [],
            'Miscellaneous': []
        };
        const seenSkillsByCategory = {
            'Programming Languages and Frameworks': new Set(),
            'Artificial Intelligence (AI)': new Set(),
            'Database Engines and Managers': new Set(),
            'Versioning and CI/CD': new Set(),
            'Cloud': new Set(),
            'Project Management': new Set(),
            'Operative Systems': new Set(),
            'IDEs': new Set(),
            'Management Tools': new Set(),
            'Miscellaneous': new Set()
        };
        const skillSeniorityMap = {};

        knowledgeData.forEach(([technology, seniority, category]) => {
            const normalizedSeniority = normalizeSeniority(seniority);
            if (technology && category && !seenSkillsByCategory[category].has(technology)) {
                seenSkillsByCategory[category].add(technology);
                categories[category].push(technology);
                skillSeniorityMap[technology] = normalizedSeniority;
            }
        });

        return { categories, skillSeniorityMap };
    };

    const { categories: skillsByCategory, skillSeniorityMap } = extractSkillsByCategory();
    const categoryOrder = [
        'Programming Languages and Frameworks',
        'Artificial Intelligence (AI)',
        'Database Engines and Managers',
        'Versioning and CI/CD',
        'Cloud',
        'Project Management',
        'Operative Systems',
        'IDEs',
        'Management Tools',
        'Miscellaneous'
    ];

    return (
        <>
            <h1 className={classes.h1}>
                Knowledge
            </h1>
            <p>
                I joined the Software World back in 2012, since then I've been learning and using several
                technologies, approaches and methodologies. You will find an exhaustive list of them below and my seniority on 
                each one as a tooltip when you hover over the skill.
            </p>
            <KnowledgeSearch />

            <div className={classes.skillsSummary}>
                {categoryOrder.map(category => (
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
