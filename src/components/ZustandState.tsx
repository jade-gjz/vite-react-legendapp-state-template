import { useRef } from 'react'
import { create } from 'zustand'

const useStore = create<{
  count: number
  inc: () => void
}>()(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count > 5 ? 0 : state.count + 1 })),
}))

const ZustandState = () => {
  const ref = useRef(0)
  const count = useStore(state => state.count * 2)
  const inc = useStore(state => state.inc)

  return (
    <div className="card shadow-cyan-600">
      <p>
        <span className="text-cyan-400">ZustandState</span>
      </p>
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {count}</code>
      </p>
      <button className="hover:border-teal-400 focus:(ring-1 ring-teal-600)" onClick={inc}>
        Click Me !
      </button>
    </div>
  )
}

export default ZustandState
