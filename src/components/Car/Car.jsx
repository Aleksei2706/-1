import React, { Component } from 'react';
import "./Car.css";


class Car extends Component {
    componentWillReceiveProps(nextProps){
        console.log('Car componentWillReceiveProps', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('Car shouldComponentUpdate', nextProps, nextState)
        return nextProps.name.trim() !== this.props.name.trim()
    }
    componentWillUpdate(nextProps, nextState){
        console.log('Car componentWillUpdate', nextProps, nextState)
    }
    componentDidUpdate(){
        console.log('Car  componentDidUpdate')
    }
    render() {
        console.log('Car render')
        const inputClasses = ['input']

    if (this.props.name !== ''){
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }
    return(
        <div>
            <h3> Car name: {this.props.name}</h3>
            <p> Year: {this.props.year}</p>
            <input type="text" onChange={this.props.onChangeName} value = {this.props.name} className = {inputClasses.join('')}></input>
            <button onClick={this.props.onDelete}>Delete</button>
        </div>
    )
    }
}
// class App extends Component{
//   constructor(props){
//     console.log("App constructor")
//     super(props)
//   this.state = {
//   cars: [
//       {name: "Ford", year: "2018"},
//       {name: "Audi", year: "2013"},
//       {name: "BMW", year: "2014"}
//   ],
//   pageTitle: 'React components',
//   showCars: false,
  
//   }
// }
//  handleInput = (event) => {
//   this.setState({
//     pageTitle: event.target.value
//   })
// }
// toggleCarsHandler =() =>{
//   this.setState({
//     showCars: !this.state.showCars
//   })
  
//   }
// onChangeName(name, index){
//     const car = this.state.cars[index]
//     car.name = name
//     const cars = [...this.state.cars]
//     cars[index] = car
//     this.setState({cars})

// }
// onChangeYear(year, index){
//   const year = this.state.cars[index]
//   cars.year = year
//   const cars = [...this.state.cars]
//   cars[index] = year
//   this.setState({cars})
// }


  // render(){
  //   console.log('Car render')

    // if (Math.random() > 0.7){
    //   throw new Error('Car random failed')
    // }

   
  //   return(
  //     <div style={{
  //       border: "1px solid #ccc",
  //       marginBottom: "10px"
  //     }}>
  //       <h1>{this.state.pageTitle}</h1>
  //       <input type= "text" onChange={this.handleInput}/>
  //       <button onClick = {this.toggleCarsHandler}>Toggle cars</button>
  //     { this.state.showCars 
  //       ? this.state.cars.map((car, index) => {
  //       return(
  //         <ErrorBoundary key={index}>
  //         <Car
  //         name = {car.name}
  //        year = {car.year}
  //        onChangeTitle = {() => this.onChangeTitleHandler(car.name)}
  //        onChangeName = {event => this.onChangeName(event.target.value, index)}
  //        onChangeYear = {event => this.onChangeYear(event.target.value, index)}/>
  //        </ErrorBoundary>
  //       )
  //     })
  //    :null
  //   }
  //   <Timer/>
  //   </div>
  //   )}
  // }

  

// function App() {
//   return (
//   <div>
//     <div className='logo'>
//     <Logo img={logo} width={'800px'} border={"4px solid black"}/>
//     </div>
//     <Menu menu={"Options"} menu2={"Team"} menu3={"Creations"}/>
//     <Back back={"#E4EFD1"}/>
//     {/* <Menudishes/> */}

    
   
//    </div>
// );
export default Car;
