import { ExperienceItem } from '../../types/stateTypes'

export const CardExperience = ({
  title,
  description,
  rangeDate,
  subtitle
}: ExperienceItem) => {
  return (
    <div className="flex flex-col shadow-lg bg-gray-100 dark:bg-gray-200 dark:text-gray-800 py-2 px-4 border rounded-xl text-gray-600 w-[30rem]">
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="font-light text-md">{subtitle}</p>
        <p className="font-extralight text-sm">{rangeDate}</p>
      </div>
      <div className="text-md py-4">
        {typeof description === 'string' ? (
          <p className="text-center">{description}</p>
        ) : (
          <ul>
            {description.map((item, index) => (
              <li className="text-center" key={item + index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
