import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";


export default function Weather (props) {
function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`);
}

let apiKey = "09a78485014abc9ba4bba90aeb20d6e1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
    return (
           <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
}