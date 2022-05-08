import React, { Component } from 'react'
import axios from 'axios'

export default class Createfood extends Component {

    constructor(props){
     super(props);
     this.state={
            foodid:"",
            foodname:"",
            quantity:"",
            priceRs:"",
            breakfast:"",
            lunch:"",
            dinner:"",

    };
}
     
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const{foodid,foodname,quantity,priceRs,breakfast,lunch,dinner} = this.state;

        const data ={
            foodid:foodid,
            foodname:foodname,
            quantity:quantity,
            priceRs:priceRs,
            breakfast:breakfast,
            lunch:lunch,
            dinner:dinner,
        }
        console.log(data)

        axios.post('/food/save',data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        foodid:"",
                        foodname:"",
                        quantity:"",
                        priceRs:"",
                        breakfast:"",
                        lunch:"",
                        dinner:"",
                    }
                )
            }
        })


    }

    render(){
        return(
            <div className="col-mb-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add Food Items</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Food Id</label>
                          <input type="text"
                          className="form-control"
                          name="foodid"
                          placeholder="Enter Food Id"
                          value={this.state.foodid}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Food Name</label>
                          <input type="text"
                          className="form-control"
                          name="foodname"
                          placeholder="Enter Food Name"
                          value={this.state.foodname}
                          onChange={this.handleInputChange}/>
                       </div>  

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Quantity</label>
                          <input type="text"
                          className="form-control"
                          name="quantity"
                          placeholder="Enter quantity (Full or Half)"
                          value={this.state.quantity}
                          onChange={this.handleInputChange}/>
                          
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >PriceRs</label>
                          <input type="text"
                          className="form-control"
                          name="priceRs"
                          placeholder="Enter Price(Rs)"
                          value={this.state.priceRs}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Breakfast</label>
                          <input type="text"
                          className="form-control"
                          name="breakfast"
                          placeholder="Enter Yes or No"
                          value={this.state.breakfast}
                          onChange={this.handleInputChange}/>
                       </div>

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Lunch</label>
                          <input type="text"
                          className="form-control"
                          name="lunch"
                          placeholder="Enter Yes or No"
                          value={this.state.lunch}
                          onChange={this.handleInputChange}/>
                       </div>

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Dinner</label>
                          <input type="text"
                          className="form-control"
                          name="dinner"
                          placeholder="Enter Yes or No"
                          value={this.state.dinner}
                          onChange={this.handleInputChange}/>
                       </div>

                       <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                           <i className="far fa-check-square"></i>
                           &nbsp; save
                       </button>

                    </form>

                 </div>          
        )
    }
  
}