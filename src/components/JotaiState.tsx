import { atom, useAtom } from 'jotai'
import { useRef } from 'react'

const countAtom = atom(0)

const JotaiState = () => {
  const ref = useRef(0)
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="card shadow-red-600">
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {count * 2}</code>
      </p>
      <button
        className="hover:border-rose-400 focus:(ring-1 ring-rose-600)"
        onClick={() => setCount(prev => (prev > 5 ? 0 : prev + 1))}
      >
        Click Me!
      </button>
      <p>
        Edit{' '}
        <code>
          src/components/<span className="text-red-400">JotaiState</span>.tsx
        </code>{' '}
        and save to test HMR
      </p>
    </div>
  )
}

export default JotaiState
