import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';

        function RenderDish({dish}) {
            if(dish!=null){
                return(
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            }
            else{
                return(
                    <div></div>
                );
            }
        }

    function RenderComments({comments}) {
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
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {DispComments}
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {

        console.log('Dishdetail Components render invoked');

        if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
export default DishDetail;
