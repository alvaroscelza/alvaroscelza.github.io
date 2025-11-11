import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {normalizeSeniority, allRows, seniorityDescriptions} from "../utils/knowledgeData";
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

        const categoryRanges = [
            { name: 'Programming Languages and Frameworks', start: 0, end: 31 },
            { name: 'Artificial Intelligence (AI)', start: 31, end: 38 },
            { name: 'Database Engines and Managers', start: 38, end: 52 },
            { name: 'Versioning and CI/CD', start: 52, end: 61 },
            { name: 'Cloud', start: 61, end: 86 },
            { name: 'Project Management', start: 86, end: 98 },
            { name: 'Operative Systems', start: 98, end: 104 },
            { name: 'IDEs', start: 104, end: 115 },
            { name: 'Management Tools', start: 115, end: 119 },
            { name: 'Miscellaneous', start: 119, end: 139 }
        ];

        categoryRanges.forEach(range => {
            for (let i = range.start; i < range.end && i < allRows.length; i++) {
                const row = allRows[i];
                const seniorityIndex = row.length - 1;
                const seniority = normalizeSeniority(row[seniorityIndex]);
                const skillParts = row.slice(0, seniorityIndex).filter(part => part.trim() !== '');
                
                skillParts.forEach(skill => {
                    const trimmedSkill = skill.trim();
                    if (trimmedSkill !== '' && !seenSkillsByCategory[range.name].has(trimmedSkill)) {
                        seenSkillsByCategory[range.name].add(trimmedSkill);
                        categories[range.name].push(trimmedSkill);
                        skillSeniorityMap[trimmedSkill] = seniority;
                    }
                });
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
