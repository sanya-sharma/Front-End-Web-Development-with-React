import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent.js';


class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        };

        console.log('Menu Components constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Components componentDidMount is invoked');
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }

    /*renderDish(dish) {
        if (dish!=null){
            console.log("Selected a Dish");
            <DishDetail selectedDish={this.state.selectedDish} />            
            console.log("Dish Selection finished");

        }
        else{
            return(
                <div></div>
            );
        }
    }*/

    render(){

        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('Menu Components render is invoked');

        return( 
            <div className="container">
                <div className="row">
                   {menu} 
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish} />

                </div>
            </div>
        );
    }
}

export default Menu;