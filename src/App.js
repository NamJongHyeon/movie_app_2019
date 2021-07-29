import React from "react";
// import Potato from "./Potato"; // Potato 가져오기

import PropTypes from "prop-types";

function Food({ name, picture, rating }) { // react로 prop 전달
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src= {picture}/>
  </div>// App에서 fav 값을 통해 나타냄
}

Food.propTypes = { // proptype으로 맞는 데이터 가져왔는지 check!
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210708_150%2F16257237667396pBLp_JPEG%2F26859550445256956_788994864.jpg&type=sc960_832",

  },
  {
    id:2,
    name: "Kimbob",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210701_56%2F1625106603144C1jNk_JPEG%2F26242437980847697_1247728794.jpg&type=sc960_832",
 
  }
];

function App() {
  return ( 
    <div>
      {/* <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" /> */}
      {foodILike.map(dish => (
        <Food 
        key = {dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} /> 
      ))}
    </div>
  );
}

export default App;
