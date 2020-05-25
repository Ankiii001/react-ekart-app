import React from 'react'

import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { setCurrentUser, login } from '../../redux/user/user.actions'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        // const { userName, password } = this.state
        this.props.login(this.state)
        console.log(this.props)
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    resetFields = event => {
        this.setState({ userName: '', password: '' })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your userName and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='userName'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.userName}
                        label='User Name'
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Log In</CustomButton>
                        <CustomButton onClick={this.resetFields} isReset >Reset</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    login: (args) => dispatch(login(args))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)