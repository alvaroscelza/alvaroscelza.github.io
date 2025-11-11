import {useState, useEffect, useRef} from "react";
import {getAllSkillsData, seniorityDescriptions} from "../../utils/knowledgeData";

const KnowledgeSearch = () => {
    const skillSeniorityMap = getAllSkillsData();
    const allSkills = Object.keys(skillSeniorityMap);
    const [searchTerm, setSearchTerm] = useState(allSkills[0] || 'Python');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isUserTyping, setIsUserTyping] = useState(false);
    const intervalRef = useRef(null);

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

    useEffect(() => {
        if (isUserTyping || allSkills.length === 0) {
            return;
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % allSkills.length;
                setSearchTerm(allSkills[nextIndex]);
                return nextIndex;
            });
        }, 3000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isUserTyping, allSkills]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setIsUserTyping(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleInputFocus = () => {
        setIsUserTyping(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleInputBlur = () => {
        const trimmedValue = searchTerm.trim();
        if (trimmedValue === '' || !allSkills.some(skill => skill.toLowerCase() === trimmedValue.toLowerCase())) {
            setIsUserTyping(false);
            const foundIndex = allSkills.findIndex(skill => skill.toLowerCase() === trimmedValue.toLowerCase());
            if (foundIndex !== -1) {
                setCurrentIndex(foundIndex);
                setSearchTerm(allSkills[foundIndex]);
            } else if (trimmedValue === '') {
                setCurrentIndex(0);
                setSearchTerm(allSkills[0] || '');
            }
        } else {
            const foundIndex = allSkills.findIndex(skill => skill.toLowerCase() === trimmedValue.toLowerCase());
            if (foundIndex !== -1) {
                setCurrentIndex(foundIndex);
            }
        }
    };

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
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
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
                onFocus={(e) => {
                    e.target.style.borderColor = '#d9411e';
                    handleInputFocus();
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    handleInputBlur();
                }}
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

