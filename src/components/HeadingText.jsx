

export function Heading1({text, cName=''}) {
  return (
    <h2 className={`md:text-4xl text-2xl font-bold mb-2 ${cName}`}>{text}</h2>
  )
}
