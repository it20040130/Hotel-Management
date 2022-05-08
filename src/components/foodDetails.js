import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


export default class foodDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            food:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/food/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    food:res.data.food
                });

                console.log(this.state.food);
            }
        })



    }

        //Report Generate Function onClick
jspdGenerator=()=>{

        
    //doc obj
    var doc =new jsPDF('p','pt');
    
    doc.autoTable({ html: '#my-table' })
    //add texts
  
    doc.text(200,20,'Project Report')

  
    doc.autoTable({
       
       tableWidth:'auto',
       margin: { top: 10 },
        columnStyles: { europe: { halign: 'center' } },
        theme:'grid',
        head: [['FoodId','FoodName','Quantity','PriceRs','Breakfast','Lunch','Dinner']],
        body: [
         
          [this.state.food.foodid,this.state.food.foodname,this.state.food.quantity,this.state.food.priceRs,this.state.food.breakfast,this.state.food.lunch,this.state.food.dinner],
  
        
          
        ],
       
        styles: {  fontSize:10 },
     
        
      })
      
    //Save pdf 
    doc.save("Generated.pdf");
  
  
  }
  render() {

    const {foodid,foodname,quantity,priceRs,breakfast,lunch,dinner} = this.state.food;

    return (
      <div style={{marginTop:'20px'}}>
      <h4>{foodid}</h4>
      <hr/>

      <dl className="row">

          <dt className="col-sm-3">FoodId</dt>  
          <dd className="col-sm-9">{foodid}</dd>  

          <dt className="col-sm-3">FoodName</dt>  
          <dd className="col-sm-9">{foodname}</dd>  

          <dt className="col-sm-3">Quantity</dt>  
          <dd className="col-sm-9">{quantity}</dd>  

          <dt className="col-sm-3">Price(Rs)</dt>  
          <dd className="col-sm-9">{priceRs}</dd>   

          <dt className="col-sm-3">Breakfast</dt>  
          <dd className="col-sm-9">{breakfast}</dd>

          <dt className="col-sm-3">Lunch</dt>  
          <dd className="col-sm-9">{lunch}</dd>

          <dt className="col-sm-3">Dinner</dt>  
          <dd className="col-sm-9">{dinner}</dd>

      </dl>  

      <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>

      </div>    

    )
  }
}