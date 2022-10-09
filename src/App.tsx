import { useComputed, useObservable, useObserve } from '@legendapp/state/react'
import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const ref = useRef(0)
  const [c, setC] = useState(0)
  const count = useObservable(0)
  const computedCount = useComputed(() => count.get() * 2)

  useObserve(() => {
    if (computedCount.get() > 10) {
      count.set(0)
    }
  })

  useEffect(() => {
    if (c > 5) {
      setC(0)
    }
  }, [c])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <code>Render times: {++ref.current}</code>
      <div className="card">
        <button onClick={() => setC(prev => prev + 1)}>useState count is {c * 2}</button>
        <br />
        <button onClick={() => count.set(prev => prev + 1)}>legend/state count is {computedCount}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
