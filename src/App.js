import './App.css';
import VistaIntegracion from './app/integracion/Vista.Integracion'
import Store from './app/utils/store/GlobalStore';

const store = new Store();

function App() {
    return (
        <VistaIntegracion store={store} />
    )
}

export default App;