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
                            --{thiscomment.author}, {thiscomment.date}
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

    renderDish(selectedDish){
        console.log("Print dish starts 2");
        if(selectedDish!=null){

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                                <CardBody>
                                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                    <CardText>{this.props.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.selectedDish.comments)}
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

        const dish = this.props.selectedDish;
        console.log("Print dish starts 1");

        return(
            this.renderDish(this.props.selectedDish)
        );
    }

}

export default DishDetail;
