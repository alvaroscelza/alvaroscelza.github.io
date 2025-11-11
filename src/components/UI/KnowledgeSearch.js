import {useState} from "react";
import {getAllSkillsData, seniorityDescriptions} from "../../utils/knowledgeData";

const KnowledgeSearch = () => {
    const [searchTerm, setSearchTerm] = useState('Python');
    const skillSeniorityMap = getAllSkillsData();

    const searchKnowledge = (term) => {
        if (!term || term.trim() === '') {
            return null;
        }
        const normalizedTerm = term.trim();
        const skillKeys = Object.keys(skillSeniorityMap);
        const foundSkill = skillKeys.find(skill => 
            skill.toLowerCase() === normalizedTerm.toLowerCase()
        );
        const seniority = foundSkill ? skillSeniorityMap[foundSkill] : null;
        return {
            name: foundSkill || normalizedTerm,
            seniority: seniority || 'None',
            description: seniority 
                ? seniorityDescriptions[seniority] 
                : 'Not used yet.'
        };
    };

    const searchResult = searchKnowledge(searchTerm);

    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <label 
                htmlFor="knowledge-search"
                style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontSize: '1em'
                }}
            >
                What do you need me to know?
            </label>
            <input
                id="knowledge-search"
                type="text"
                placeholder="Type a technology name (e.g., Python, React, AWS)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    padding: '10px 14px',
                    fontSize: '1em',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    width: '100%',
                    maxWidth: '500px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                    outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#d9411e'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            {searchResult && (
                <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.1em', marginBottom: '8px' }}>
                        {searchResult.name}
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        <strong>Seniority:</strong> {searchResult.seniority}
                    </div>
                    <div>
                        <strong>Description:</strong> {searchResult.description}
                    </div>
                </div>
            )}
        </div>
    );
};

export default KnowledgeSearch;

