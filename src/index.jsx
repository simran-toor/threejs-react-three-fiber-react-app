import './style.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))


root.render(
    <App clickersCount={ 3 }>
        <h1>First React App</h1>
        <h2>Fancy subtitle</h2>
    </App>
)