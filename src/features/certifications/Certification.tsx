export default function Certification({
  category,
  name,
  association,
  result,
  date,
}: {
  category:    string
  name:        string
  association: string
  result:      string
  date:        string
}) {
  const categoryTextColors: Record<string, string> = {
    IT:       'text-cyan-300',
    English:  'text-yellow-400',
    Japanese: 'text-red-400',
    German:   'text-orange-300',
    Industry: 'text-purple-300',
  };

  return (
    <div className='w-full bg-mga-3 rounded-xl text-mga-4'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 my-4 mx-8'>
        <p className={`md:w-32 text-sm md:text-lg ${categoryTextColors[category]}`}>{category}</p>
        <div className='flex flex-col flex-1 text-center md:text-left'>
          <h2 className='text-lg md:text-xl font-semibold'>{name}</h2>
          <p className='text-sm'>{association}</p>
        </div>
        <p className='md:w-24 md:text-lg font-semibold md:font-normal'>{result}</p>
        <p className='md:w-24 md:text-right'>{date}</p>
      </div>
    </div>
  )
}