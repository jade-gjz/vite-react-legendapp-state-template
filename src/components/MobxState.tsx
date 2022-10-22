import { useRef } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'

const MobxState = observer(() => {
  const ref = useRef(0)
  const counter = useLocalObservable(() => ({
    count: 0,
    get computedCount() {
      return this.count * 2
    },
    setCount(val: number) {
      this.count = val
    },
  }))

  return (
    <div className="card shadow-yellow-600">
      <p>
        <span className="text-yellow-400">MobxState</span>
      </p>
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {counter.computedCount}</code>
      </p>
      <button
        className="hover:border-amber-400 focus:(ring-1 ring-amber-600)"
        onClick={() => counter.setCount(counter.count > 5 ? 0 : counter.count + 1)}
      >
        Click Me !
      </button>
    </div>
  )
})

export default MobxState
