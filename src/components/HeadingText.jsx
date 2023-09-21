

export function Heading1({text, cName=''}) {
  return (
    <h2 className={`text-3xl font-bold mb-2 ${cName}`}>{text}</h2>
  )
}
