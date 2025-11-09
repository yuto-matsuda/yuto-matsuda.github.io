export default function Link({
  to,
  children
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <a href={to} target='_blank' className='text-mga-blue border-b border-mga-blue px-1'>{children}</a>
  )
}