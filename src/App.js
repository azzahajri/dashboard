import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PipelineResults from './components/PipelineResults';
function App() {
  return (
    <div className="container">
      <header >
        <Header />
      </header>
      <PipelineResults />
    </div>
  );
}

export default App;
