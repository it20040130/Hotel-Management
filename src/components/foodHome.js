import React, { Component } from 'react';
import axios from 'axios';

export default class foodHome extends Component {
constructor(props){
  super(props);

  this.state={
    food:[]
  };

}  

componentDidMount(){
  this.retrievefood()
}

retrievefood(){
  axios.get("/food").then(res =>{
    if(res.data.success){
      this.setState({
        food:res.data.existingfood
      });

      console.log(this.state.food);

    }
  });
}

onDelete =(id) =>{
  axios.delete(`/food/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievefood();
  })
}

filterData(food,searchkey){

  const result = food.filter((food)=>
   food.foodid.includes(searchkey)
   )

   this.setState({food:result})
}

handleSearchArea = (e) =>{
  const searchkey= e.currentTarget.value;

  
    axios.get("/food").then(res =>{
      if(res.data.success){
       
        this.filterData(res.data.existingfood,searchkey)
      }
    });
}


  render() {
    return (
      <div className="container">
       <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
         <h4>Food Items</h4>  
         </div>
         <div className="col-lg-3 mt-2 mb-2">
           <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchQuery"
           onChange={this.handleSearchArea}>

           </input>
           </div>
           </div>
           <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">FoodId</th>
              <th scope="col">FoodName</th>
              <th scope="col">Quantity</th>
              <th scope="col">PriceRs</th>
              <th scope="col">Breakfast</th>
              <th scope="col">Lunch</th>
              <th scope="col">Dinner</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {this.state.food.map((food,index) =>(
              <tr key={index}>

                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/food/${food._id}`} style={{textDecoration:'none'}}>
                    {food.foodid}
                    </a>
                    
                    </td>   
                <td>{food.foodname}</td>
                <td>{food.quantity}</td>
                <td>{food.priceRs}</td>
                <td>{food.breakfast}</td>
                <td>{food.lunch}</td>
                <td>{food.dinner}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${food._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(food._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}




          </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add</a></button>

        

      </div>
    )
    
  }
}