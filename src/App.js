import './App.css';
import Game from './components/Game';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  return (
    <Fragment>
      <h1 className='tittle'> Star match </h1>
      <Game />
    </Fragment >
  )
}

export default App;
