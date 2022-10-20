// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import React from 'react';
import axios from 'axios';

const USERS_REST_API_URL= "http://localhost:8080/user/getuser";


 class UserServices {
 
getUsers(){
   return axios.get(USERS_REST_API_URL)
}

}

export default new UserServices();