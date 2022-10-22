import { useRef, useState } from 'react'
import { Provider } from 'jotai'
import { useInterval } from 'ahooks'
import { useObservable } from '@legendapp/state/react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseState from './components/UseState'
import LegendState from './components/LegendState'
import JotaiState from './components/JotaiState'
import MobxState from './components/MobxState'
import ValtioState from './components/ValtioState'
import ZustandState from './components/ZustandState'

const Block1 = () => {
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
        <Provider>
          <JotaiState />
        </Provider>
        <ValtioState />
        <ZustandState />
        <MobxState />
      </div>
    </>
  )
}

const Block2 = () => {
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
        <Provider>
          <JotaiState />
        </Provider>
        <ValtioState />
        <ZustandState />
        <MobxState />
      </div>
    </>
  )
}

const App = () => {
  const ref = useRef(0)

  return (
    <div className="App">
      <code>Render Times: {++ref.current}</code>
      <Block1 />
      <Block2 />
    </div>
  )
}

export default App
