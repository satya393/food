import React from 'react';
import UserServices from '../services/UserServices'; 
import Card from 'react-bootstrap/Card';


class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state  = {
            getuser:[]
        }
    }

    componentDidMount(){
        UserServices.getUsers().then((response) =>{
        this.setState({ getuser: response.data})
        });
    }

render(){
  //example:  https://www.youtube.com/watch?v=5RA5NpxbioI
    return(
        <div>
            {
                this.state.getuser.map(
                    user =>
                    // <tr key = {user.Id}>
                    //     <td>{user.userId} |</td> <hr/>
                    //     <td>{user.userName} |</td> 
                    //     <td>{user.userEmail}|</td>
                    //     <td>{user.userPhoneNumber}|</td>
                    //     <td>{user.userAddres}|</td>
                    //     <td>{user.isActive}</td>

                        

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{user.userName} </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{user.userEmail}</Card.Subtitle>
                                <Card.Text>
                                {user.userAddres}
                                </Card.Text>
                                <Card.Link href="#">{user.isActive}</Card.Link>
                                {/* <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                            </Card>


                    // </tr>
                )
            }

        </div>
    )
}

}
export default UserComponent