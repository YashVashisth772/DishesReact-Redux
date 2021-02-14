import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm22 from './CommentFormComponent';


function RenderDish({dish}){
    if(dish){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else{
        return <div></div>
    }
}

function RenderComments({comments}){
        if(comments){
            let commentListItems = comments.map((comment) => {
                return(
                    <li key={comment.id}>
                        <div>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    </li>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentListItems}
                    </ul>
                    <CommentForm22 />
                </div>
            )
        }else{
            return <div></div>
        }

}


const DishDetail = (props) => {
    // console.log('yash m',props.dish.comments);
    // console.log('yash cc',props.dish.id)
    if(props.dish){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
        )
    }else{ 
        return <div></div>
    }
}


export default DishDetail;





//Class based component form
// class DishDetail extends Component {
    
//     renderDish(dish) {
//         // const dish = this.props.choosenDish; 
//         if(dish){
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <Card>
//                         <CardImg top src={dish.image} alt={dish.name} />
//                         <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         }
//         else{
//             return <div></div>
//         }
//     }
//     renderComments(dish){
//         const comments = dish;
//         if(comments){
//             const commentListItems = comments.map((comment) => {
//                 return(
//                     <li key={comment.id}>
//                         <div>
//                             <p>{comment.comment}</p>
//                             <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
//                         </div>
//                     </li>
//                 );
//             });
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <h4>Comments</h4>
//                     <ul className="list-unstyled">
//                         {commentListItems}
//                     </ul>
//                 </div>
//             )
//         }else{
//             return <div></div>
//         }
           
//     }

//     render() {      
       
//             return (
//                 this.props.dish &&
//                 <div className="conainer">
//                     <div className="row">
//                         {this.renderDish(this.props.dish)}
//                         {this.renderComments(this.props.dish.comments)}
//                     </div>
//                 </div>
              
//             )

//     }
// }

