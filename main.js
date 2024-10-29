document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            var isHidden = skillsSection.style.display === 'none';
            skillsSection.style.display = isHidden ? 'block' : 'none';
            toggleSkillsButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
        });
    }
});
