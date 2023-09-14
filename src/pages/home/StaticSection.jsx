

export default function StaticSection() {
  return (
    <div className="bg-gray-600 text-white md:mx-[8%] md:px-[4rem] md:py-[4rem] px-4 py-8">
        <div className="text-center md:px-[15%]">
            <span className="md:text-3xl text-xl font-bold text-center text-yellow-400 mb-2">Statistic</span>
            <h2 className="md:text-4xl text-2xl font-semibold text-center">Trusted By Thousands People Around South Sudan</h2>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-8">
            {data.map(d => (
                <div className="text-center">
                    <span className="text-6xl font-bold text-green-500">{d.count}</span>
                    <p className="text-yellow-400 text-xl">{d.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

const data = [
    {
        name:'Providers',
        count:250
    },
    {
        name:'Customers',
        count:250
    },
    {
        name:'Jobs',
        count:250
    },
    {
        name:'Categories',
        count:250
    },
]