import { useNavigate } from "react-router-dom";
import State from "../libraries/State";
import { useEffect } from "react";

function Authenticated(props) {
    const navigate = useNavigate();
    
    /**
     * Get token from global state 
     * @param boolean - second parameter is flagging to get parent state
     */
    const state = new State().Storage.getState();
    const accessToken = state.getItem('accessToken', true);

    /**
     * Validate accessToken before rendering
     * 
     * #1: check format with JWT Authentication
     * #2: check valid user by token decoded
     */

    let allowed = false;
    if(accessToken) {
        /**
         * #1 - checking JWT format
         */

        /**
         * #2 - check valid user from database
         */

        allowed = true; // flag this as authenticated
    }

    /**
     * Condition when user is not authenticated with some reasons
     * Token not valid|expired or user is not exists from your database
     */
    useEffect(() => {
        /**
         * Redirecting to login page
         */
        if(!allowed) navigate('/login');
    }, []);
    
    return props.render;
}

export default Authenticated;