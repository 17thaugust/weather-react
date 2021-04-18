import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-5">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    id="city-input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>

            <div className="overview">
              <h1 id="city">New York</h1>
              <ul>
                <li>
                  Last updated at: Sunday, 15:00<span id="date"></span>
                </li>
                <li id="description">Sunny</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    id="icon"
                    alt="Partly Cloudy"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature">19</strong>
                    <span className="units">
                      {" "}
                      <a
                        href="https://mixeh.csb.app/"
                        id="celsius-link"
                        className="active"
                      >
                        °C
                      </a>{" "}
                      |{" "}
                      <a href="https://mixeh.csb.app/" id="fahrenheit-link">
                        °F
                      </a>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">80</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">15</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}