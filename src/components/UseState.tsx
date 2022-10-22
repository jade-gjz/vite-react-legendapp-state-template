import { useRef, useState } from 'react'

const UseState = () => {
  const ref = useRef(0)
  const [count, setCount] = useState(0)

  return (
    <div className="card shadow-green-600">
      <p>
        <span className="text-green-400">UseState</span>
      </p>
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {count * 2}</code>
      </p>
      <button
        className="hover:border-lime-400 focus:(ring-1 ring-lime-600)"
        onClick={() => setCount(prev => (prev > 5 ? 0 : prev + 1))}
      >
        Click Me !
      </button>
    </div>
  )
}

export default UseState
