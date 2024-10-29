document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills');
    const skillsSection = document.getElementById('skills');

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', () => {
            const isHidden = skillsSection.style.display === 'none';
            skillsSection.style.display = isHidden ? 'block' : 'none';
            toggleSkillsButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
        });
    }
});
