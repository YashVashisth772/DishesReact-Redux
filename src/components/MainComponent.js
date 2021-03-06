import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent ';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect ,withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes2();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

//   onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId});
//   }

  render() {
    const HomePage = () => {
      return(
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            addComment={this.props.addComment}
          />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />

              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />

              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm2} />} />

              <Route path='/aboutus' component={() => <About leaders={this.props.leaders} /> }/>

              <Route path='/menu/:dishId' component={DishWithId} />

              <Redirect to="/home" />
          </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment2: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),

  fetchDishes2: () => { dispatch(fetchDishes())},

  resetFeedbackForm2: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));