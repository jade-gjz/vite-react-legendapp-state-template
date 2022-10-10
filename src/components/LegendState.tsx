import { useComputed, useObservable, useObserve } from '@legendapp/state/react'
import { useRef } from 'react'

const LegendState = () => {
  const ref = useRef(0)
  const count = useObservable(0)
  const computedCount = useComputed(() => count.get() * 2)

  useObserve(() => {
    if (computedCount.get() > 10) {
      count.set(0)
    }
  })

  return (
    <div className="card shadow-blue-600">
      <p>
        <code>Render Times: {++ref.current}</code>
      </p>
      <p>
        <code>Count is {computedCount}</code>
      </p>
      <button className="hover:border-sky-400 focus:(ring-1 ring-sky-600)" onClick={() => count.set(prev => prev + 1)}>
        Click Me!
      </button>
      <p>
        Edit{' '}
        <code>
          src/components/<span className="text-blue-400">LegendState</span>.tsx
        </code>{' '}
        and save to test HMR
      </p>
    </div>
  )
}

export default LegendState
