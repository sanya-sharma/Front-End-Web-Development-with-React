import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';

console.log("Print dish starts 3");

class DishDetail extends Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    }

    renderComments(comments){
        if(comments!=null){
            const DispComments = comments.map((thiscomment) =>{
            
                return (
                        <div key={thiscomment.id} >
                            <br/>
                            {thiscomment.comment}
                            <br/>
                            --{thiscomment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(thiscomment.date)))}
                        </div>
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {DispComments}
                </div>
            );

        }
        else{
            return(
                <div></div>
            );
        }

    }

    renderDish(dish){
        console.log("Print dish starts 2");
        if(dish!=null){

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {

        console.log("Print dish starts 1");

        return(
            <div className="container">
                {this.renderDish(this.props.dish)}

            </div>
        );
    }

}

export default DishDetail;
