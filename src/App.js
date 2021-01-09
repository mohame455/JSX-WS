import './App.css';
import Comments from './Components/Comments/Comments';
import MainVideo from './Components/MainVideo/MainVideo'
import SuggestionVideo from './Components/Suggestion/Suggestion';

function App() {
  return (
    <div className='container-fluid'>
      <div className="row mt-3">
        <MainVideo />
        <SuggestionVideo/>
      </div>
      <div style={{marginTop:'-250px'}}>
        <Comments/>
      </div>
    </div>
  );
}

export default App;
