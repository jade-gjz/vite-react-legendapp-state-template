import { atom, useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'

const countAtom = atom(0)
const computedCountAtom = atom(get => get(countAtom) * 2)

const JotaiState = () => {
  const ref = useRef(0)
  const setCount = useSetAtom(countAtom)
  const count = useAtomValue(computedCountAtom)

  return (
    <div className="card shadow-red-600">
      <p>
        <span className="text-red-400">JotaiState</span>
      </p>
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {count}</code>
      </p>
      <button
        className="hover:border-rose-400 focus:(ring-1 ring-rose-600)"
        onClick={() => setCount(prev => (prev > 5 ? 0 : prev + 1))}
      >
        Click Me !
      </button>
    </div>
  )
}

export default JotaiState
