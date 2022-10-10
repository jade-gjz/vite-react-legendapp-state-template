import { useRef } from 'react'
import { Provider } from 'jotai'
import reactLogo from './assets/react.svg'
import './App.css'
import UseState from './components/UseState'
import LegendState from './components/LegendState'
import JotaiState from './components/JotaiState'
import MobxState from './components/MobxState'

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
      <h1>Vite + React</h1>
      <code>Render Times: {++ref.current}</code>
      <div className="fc">
        <UseState />
        <LegendState />
        <Provider>
          <JotaiState />
        </Provider>
        <MobxState />
      </div>
    </div>
  )
}

export default App
