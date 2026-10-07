import "./style.css";

function App() {
  return (
    <div className="container">
      <h1>My Playlist</h1>
      <p>Welcome to Antons playlist!</p>

      <div className="song">
        <button>Play</button>

        <div>
          <h2>Die With A Smile</h2>
          <p>Lady Gaga & Bruno Mars</p>
        </div>

        <span>4:11</span>
      </div>

      <div className="song">
        <button>Play</button>

        <div>
          <h2>Pangako</h2>
          <p>Valley Of Chrome</p>
        </div>

        <span>4:58</span>
      </div>

      <div className="song">
        <button>Play</button>

        <div>
          <h2>Risk It All</h2>
          <p>Bruno Mars</p>
        </div>

        <span>3:25</span>
      </div>

      <div className="song">
        <button>Play</button>

        <div>
          <h2>Shot Puno</h2>
          <p>Juan Karlos</p>
        </div>

        <span>4:40</span>
      </div>

      <div className="song">
        <button>Play</button>

        <div>
          <h2>nag nakaw ng cp</h2>
          <p>Jessie Andino</p>
        </div>

        <span>3:25</span>
      </div>
    </div>
  );
}

export default App;
