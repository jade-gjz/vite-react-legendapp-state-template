import { useMemo, useRef, useState } from 'react'
import { Provider } from 'jotai'
import { useInterval } from 'ahooks'
import { useObservable } from '@legendapp/state/react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseState from './components/UseState'
import LegendState from './components/LegendState'
import JotaiState from './components/JotaiState'
import MobxState from './components/MobxState'

const Top = () => {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(prev => prev + 1)
  }, 1000)

  return (
    <>
      <p>State Count is {count}</p>
      <div className="fc">
        <UseState />
        <LegendState />
        {useMemo(
          () => (
            <LegendState />
          ),
          []
        )}
        <Provider>
          <JotaiState />
        </Provider>
        <MobxState />
      </div>
    </>
  )
}

const Bottom = () => {
  const state = useObservable({ count: 0 })

  useInterval(() => {
    state.set({ count: state.get().count + 1 })
  }, 1000)

  return (
    <>
      <p>Obs Count is {state.count}</p>
      <div className="fc">
        <UseState />
        <LegendState />
        {useMemo(
          () => (
            <LegendState />
          ),
          []
        )}
        <Provider>
          <JotaiState />
        </Provider>
        <MobxState />
      </div>
    </>
  )
}

const App = () => {
  const ref = useRef(0)

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
      <code>Render Times: {++ref.current}</code>
      <Top />
      <Bottom />
    </div>
  )
}

export default App
