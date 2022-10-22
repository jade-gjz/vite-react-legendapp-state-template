import { useRef } from 'react'
import { useSnapshot } from 'valtio'
import { proxyWithComputed } from 'valtio/utils'

const state = proxyWithComputed({ count: 0 }, { doubledCount: snap => snap.count * 2 })

const increment = () => (state.count > 5 ? (state.count = 0) : (state.count += 1))

const ValtioState = () => {
  const ref = useRef(0)
  const snap = useSnapshot(state)

  return (
    <div className="card shadow-purple-600">
      <p>
        <span className="text-purple-400">ValtioState</span>
      </p>
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {snap.doubledCount}</code>
      </p>
      <button className="hover:border-violet-400 focus:(ring-1 ring-violet-600)" onClick={increment}>
        Click Me !
      </button>
    </div>
  )
}

export default ValtioState
