import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

// import HomePage from './pages/homepage/homepage.component'
import CheckoutPage from './pages/checkout/checkout.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import UserSignUpAndSignInPage from './pages/user-sign-up-and-sign-in/user-sign-up-and-sign-in.component'
import { setCurrentUser } from './redux/user/user.actions'


import './App.css';

class App extends React.Component {

  componentDidMount() {
    const user = localStorage.getItem('user')
    this.props.setCurrentUser({ currentUser: user })
    console.log(`User logged in : ${user}`)
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ShopPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/'/>
            ) : (
              <UserSignUpAndSignInPage />
            )
          }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
