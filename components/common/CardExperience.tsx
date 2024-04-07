import { ExperienceItem } from '../../types/stateTypes'

export const CardExperience = ({
  title,
  description,
  rangeDate,
  subtitle
}: ExperienceItem) => {
  return (
    <div className="flex flex-col bg-green-600 py-2 px-4 border rounded-xl cursor-pointer ">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="font-light text-md">{subtitle}</p>
        <p className="font-extralight text-sm">{rangeDate}</p>
      </div>
      <div className="hidden">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          <ul>
            {description.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
