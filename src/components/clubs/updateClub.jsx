import React from 'react'
import {setdata,getclubinfo} from '../redux/actions/ClubsActions'
import { connect } from 'react-redux';
 class updateClub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          club_list: [],
        };
      }
    componentWillReceiveProps(props){
      console.log(props)
    }
      render() {
   
        var {
          name,
          username,
          email,
          mobile,
          submit_success,
          is_create,
          club_type,
          club_list,
          clublocation,
          clubname,
          superAdminId,
        } = this.props;
    
        return (
         <div></div>
        )
    }
    componentDidMount() {
     
  
          this.props.getclubinfo();
      
  }
}
const mapStateToProps=(state)=>{
  this.props.getclubinfo()
}
const mapDispatchToprops=(dispatch)=>{
  return{
    getclubinfo: (input) => {
    dispatch(getclubinfo(input));
  } 
}
}
export default connect(mapStateToProps,mapDispatchToprops)(updateClub) ;
