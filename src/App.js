import pic from './profilepcs.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div >
        <img style={{width:"auto",height:"600px",marginTop:"20px"}} src={pic} alt="profile" />
      </div>
      <h2>Habteab Firezgi</h2>
      <p>React Native Apprentice</p>
      <p>He/Him</p>
    </div>
  );
}

export default App;
