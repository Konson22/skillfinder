

export default function InputField({ fields, handleInput }) {
  return (
    <div className="mb-5" key={fields.name}>
        <label className="block text-sm m-1" htmlFor={fields.name}>{fields.label}</label>
        {fields.type !== 'textarea' ?
            <input 
              {...fields} 
              onChange={e => handleInput(e)}
              required
              className="h-[3rem] w-full bg-white border-none focus-within:bg-white rounded px-4" 
            />:
            <textarea 
              {...fields}
              onChange={e => handleInput(e)}
              className="h-[6.5rem] w-full bg-white border-none focus-within:bg-white rounded p-4" 
            >
            </textarea>
        }
    </div>
  )
}
