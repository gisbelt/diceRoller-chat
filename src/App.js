import './styles.css';
import { Header } from './components/banner/Header';
import { Main } from './components/main/Main';


function App() {

  // mongodb:
  // user: root 
  // password: ntriJvytmSa8mPf0

  // 186.188.29.93/32
  // My IP Address

return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
