

export default function StaticSection() {
  return (
    <div className="md:mx-[8%] md:px-[4rem] md:py-[4rem] px-4 py-8">
        <div className="text-center md:px-[15%]">
            <span className="md:text-3xl text-xl font-bold text-center text-yellow-400 mb-2">Statistic</span>
            <h2 className="md:text-4xl text-2xl font-semibold text-center">Trusted By Thousands People Around South Sudan</h2>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-8">
            {data.map(d => (
                <div className={`bg-white md:py-8 py-5 shadow-md rounded text-center border-b-8 ${d.border}`}>
                    <span className={`md:text-6xl text-4xl font-bold ${d.text}`}>{d.count}</span>
                    <p className="md:text-2xl text-sm md:font-bold mt-2">{d.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

const data = [
    {
        name:'Providers',
        count:250,
        border:'border-rose-600',
        text:'text-rose-600'
    },
    {
        name:'Customers',
        count:250,
        border:'border-yellow-600',
        text:'text-yellow-600'
    },
    {
        name:'Jobs',
        count:250,
        border:'border-green-600',
        text:'text-green-600'
    },
    {
        name:'Categories',
        count:250,
        border:'border-sky-600',
        text:'text-sky-600'
    },
]