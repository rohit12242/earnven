import React,{Component} from 'react';
import accountLogo from '../../../../assets/icons/accountlogo.png';
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";


const AvatarContainer = styled.div`
  display: flex;
  margin-top:25px;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;

const AvatarLabel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 62px;
`;


export default class Account extends Component{
    render() {
        return(
            /*<div>
                <img src={accountLogo} alt="accountLogo"/>
                <span>
                    <button>My Addr</button>
                    <p style={{color:'red'}}>$12500</p>
                </span>
            </div>*/
            <AvatarContainer>
                <AvatarLabel>
                    <Avatar
                        style={{ marginRight: "14px" }}
                        alt="Jack Sparrow"
                        src={accountLogo}
                    />
                    <Typography variant="body2" color="primary"> Jack Sparrow</Typography>
                </AvatarLabel>
            </AvatarContainer> 
        );
    }
}