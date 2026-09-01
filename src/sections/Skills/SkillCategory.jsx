import SkillItem from './SkillItem'

function SkillCategory({ category }) {
  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] p-5">
      {/* Category Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-muted)] flex items-center justify-center">
          <span className="text-sm">{category.icon}</span>
        </div>
        <h3 className="text-sm font-semibold text-[var(--color-text)]">
          {category.name}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {category.skills.map((skill, i) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
