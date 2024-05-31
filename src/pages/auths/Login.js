import { useNavigate } from "react-router-dom";
import State from "./../../libraries/State";
import * as Components from "./../../components/Components";

function Login() {
    const navigate = useNavigate();
    const state = new State("custom_state_login").Storage.getState(); // load core state from library

    /**
    * Action handlers
    */
    const doLogin = () => {
        /**
         * Getting data from global state
         */
        const data = {
            email: state.getItem('email'),
            password: state.getItem('password'),
        }

        /**
         * Static validation
         */
        if(data.email === "admin@admin.com") {
            /**
             * Set as logged
             */
            const sessionData = {
                token: 'thisissupersecrettoken',
                email: data.email
            }

            /**
             * Regist access token to global state as parent
             * @param boolean - the third parameter is flagging to make this data as parent state (IMPORTANT)
             */
            state.setItem('accessToken', sessionData, true);
            state.flush(); // remove all state data in this page

            /**
             * Redirecting
             */
            navigate('/dashboard');
        } else {
            /**
             * Error message
             */
            console.log('Login failure, use this email for demo login', 'admin@admin.com');
        }
    }

    /**
     * Render view
     */
    return (
        <div className="page-sign">
            <div className="card card-sign">
                <div className="card-header">
                    <a href="/login" className="header-logo mb-4">ReactBoilerplate</a>
                    <h3 className="card-title">Sign In</h3>
                    <p className="card-text">Welcome back! Please signin to continue.</p>
                </div>
                <div className="card-body">
                    <Components.Input 
                        type="email"
                        name="email" 
                        label="Email address"
                        placeholder="Enter your email address"
                        validator={{
                            required: true,
                            min_length: 0,
                            max_length: 100,
                            is_email: true
                        }}
                    />
                    <Components.Input 
                        type="password"
                        name="password" 
                        label="Password"
                        placeholder="Enter your password"
                        validator={{
                            required: true,
                            min_length: 4,
                            max_length: 100
                        }}
                    />
                    <Components.Button
                        label="Sign in"
                        className="btn-primary btn-sign"
                        action={doLogin}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login;