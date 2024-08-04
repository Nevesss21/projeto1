import './index.scss';
import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className="Pagina-app">
      <h1 className='titulo1'>Neves21</h1>
      <ul>
        <li>
          <Link to='/Contato'> Proxima pagina </Link>
        </li>
      </ul>
    </div>
  );
}

