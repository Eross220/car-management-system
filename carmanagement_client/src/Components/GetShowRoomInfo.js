import React, { Component } from 'react';
import {Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './GetShowRoomInfo.css'
class GetShowRoomInfo extends Component {
  constructor(props){
    super(props);
    this.state={
        car:[],
        showroom:[],
        expanded: false //begin with box closed
    }
  }
showButton = () => { 
  this.setState({ expanded: !this.state.expanded })
}

  componentDidMount(){
    var self = this;
    fetch('http://localhost:8000/get-car-by-showroom/?showroom='+this.props.match.params.id,)
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
            car:data,
        })
    })
  
    fetch('http://localhost:8000/single-showroom/'+this.props.match.params.id,)
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
          showroom:data,
        })
    })
}
   
  render(){
    const { expanded } = this.state
    return (
      <div className='container'>
        <div key={this.state.showroom.id}>
          <h4 className="text-center formtop">Show Room Info</h4>
          <label><b>Show Info Id:</b></label>
          <span >{this.state.showroom.id}</span>
          <br/>
          <label><b>Name:</b></label>
          <span >{this.state.showroom.name}</span>
          <br/>
          <label><b>Registration Number:</b></label>
          <span className="text-center">{this.state.showroom.registration_number}</span>
          <br/>
          <label><b>Logo Type:</b></label>
          <span>{this.state.showroom.logo_type}</span>
          <br/>
          <Button onClick={ this.showButton }>Veiw Contact Detail</Button>
          { 
            expanded && //show if expanded is true
            <div>{this.state.showroom.contact_info}</div>
          }
          <div className="row">
          {this.state.car.map((rowdata,i)=>
            <Link key={rowdata.id} className="linkelement"  to={`/getcarinfo/${rowdata.id}`}>
              <div className="card showroomcarinfo">
                <div className="card-body showroomcarbodyinfo">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                      {
                        
                        (typeof(rowdata.image_feild)=='object')?
                        <div>
                        {
                          rowdata.image_feild.map((subRowData,k)=>
                            <img src={subRowData.image} className="d-block w-100" alt="..."/>
                            )
                        } 
                        </div>:null
                      }
                       
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center">Car Info</h4>
                  <label><b>Show Info Id:</b></label>
                  <span >{rowdata.car.id}</span>
                  <br/>
                  <label><b>Car Name:</b></label>
                  <span >{rowdata.car.name}</span>
                  <br/>
                  <label><b>Car Mileage:</b></label>
                  <span >{rowdata.car.mileage}</span>
                  <br/>
                  <label><b>Year:</b></label>
                  <span >{rowdata.car.year}</span>
                  <br/>
                  <label><b>Status:</b></label>
                  <span >{rowdata.car.status===0 ? "Sold":"In Stock"}</span>
                  <br/>
                  <label><b>Transmission:</b></label>
                  <span >{rowdata.car.transmission===0? "Manual":"Automatic"}</span>
                  <br/>
                  <label><b>Price:</b></label>
                  <span >{rowdata.car.price}</span>
                  <br/>
                </div>
              </div> 
            </Link>
        )}
          </div>
       </div>
        </div>
        
    
    );
  }
}

export default GetShowRoomInfo ;