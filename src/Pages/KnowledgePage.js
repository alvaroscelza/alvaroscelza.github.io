import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {knowledgeData, seniorityDescriptions, levelOrder} from "../utils/knowledgeData";
import KnowledgeSearch from "../components/UI/KnowledgeSearch";

const levelRank = Object.fromEntries(levelOrder.map((level, index) => [level, index]));

const KnowledgePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Skills & Technologies"
    }, []);

    const extractSkillsByCategory = () => {
        const categories = {
            'Programming Languages and Frameworks': [],
            'Artificial Intelligence (AI)': [],
            'Database Engines and Managers': [],
            'Data Engineering': [],
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
            'Data Engineering': new Set(),
            'Versioning and CI/CD': new Set(),
            'Cloud': new Set(),
            'Project Management': new Set(),
            'Operative Systems': new Set(),
            'IDEs': new Set(),
            'Management Tools': new Set(),
            'Miscellaneous': new Set()
        };
        const skillSeniorityMap = {};

        knowledgeData.forEach(([technology, level, category]) => {
            if (technology && category && !seenSkillsByCategory[category].has(technology)) {
                seenSkillsByCategory[category].add(technology);
                categories[category].push(technology);
                skillSeniorityMap[technology] = level;
            }
        });

        Object.keys(categories).forEach(category => {
            categories[category].sort((a, b) => {
                return (levelRank[skillSeniorityMap[a]] ?? levelOrder.length)
                    - (levelRank[skillSeniorityMap[b]] ?? levelOrder.length);
            });
        });

        return { categories, skillSeniorityMap };
    };

    const { categories: skillsByCategory, skillSeniorityMap } = extractSkillsByCategory();
    const categoryOrder = [
        'Programming Languages and Frameworks',
        'Artificial Intelligence (AI)',
        'Database Engines and Managers',
        'Data Engineering',
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
                Skills & Technologies
            </h1>
            <p>
                With 10+ years of software development experience, I've been learning and using a wide range of
                skills, technologies and practices. You'll find them listed below, and the seniority is shown when you
                hover over each one.
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
