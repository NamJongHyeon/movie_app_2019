import React from "react";
// import Potato from "./Potato"; // Potato 가져오기

// import PropTypes from "prop-types";

// function Food({ name, picture, rating }) { // react로 prop 전달
//   return <div>
//     <h2>I like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src= {picture}/>
//   </div>// App에서 fav 값을 통해 나타냄
// }

// Food.propTypes = { // proptype으로 맞는 데이터 가져왔는지 check!
//   name: PropTypes.string.isRequired,
//   picture:PropTypes.string.isRequired,
//   rating:PropTypes.number
// }

// const foodILike = [
//   {
//     id:1,
//     name: "Kimchi",
//     image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210708_150%2F16257237667396pBLp_JPEG%2F26859550445256956_788994864.jpg&type=sc960_832",

//   },
//   {
//     id:2,
//     name: "Kimbob",
//     image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210701_56%2F1625106603144C1jNk_JPEG%2F26242437980847697_1247728794.jpg&type=sc960_832",
 
//   }
// ];

// function App() {
//   return ( 
//     <div>
//       {/* <Food fav="kimchi" />
//       <Food fav="ramen" />
//       <Food fav="samgiopsal" />
//       <Food fav="chukumi" /> */}
//       {foodILike.map(dish => (
//         <Food 
//         key = {dish.id} 
//         name={dish.name} 
//         picture={dish.image} 
//         rating={dish.rating} /> 
//       ))}
//     </div>
//   );
// }

// class App extends React.Component {
//   //state: object / component: data 넣을 공간
//   // 바꾸고 싶은 data를 state에 넣음
//   // 함수 내에서 state를 직접 변경 할 수 x, setState() 사용
//   // setState()를 사용할 때마다 다시 render
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));
//     // current로 외부에 영향 x
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//   };
//   render() {
//     return (
//     <div>
//       <h1>The number is {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//     );
//   }
// }


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}


export default App;
