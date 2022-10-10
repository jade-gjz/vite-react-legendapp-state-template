import { useRef } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'

const MobxState = observer(() => {
  const ref = useRef(0)
  const counter = useLocalObservable(() => ({
    count: 0,
    setCount(val: number) {
      this.count = val
    },
  }))

  return (
    <div className="card shadow-yellow-600">
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {counter.count * 2}</code>
      </p>
      <button
        className="hover:border-amber-400 focus:(ring-1 ring-amber-600)"
        onClick={() => counter.setCount(counter.count > 5 ? 0 : counter.count + 1)}
      >
        Click Me!
      </button>
      <p>
        Edit{' '}
        <code>
          src/components/<span className="text-yellow-400">MobxState</span>.tsx
        </code>{' '}
        and save to test HMR
      </p>
    </div>
  )
})

export default MobxState
