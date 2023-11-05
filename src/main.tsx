// Components, etc..
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
// focus-visible => add class .focus-visible to focused components
import "focus-visible"
// styles
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
