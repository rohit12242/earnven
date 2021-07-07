import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TransparentButton from '../../components/TransparentButton'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100px',
    background:'transparent'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    background:'transparent'
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{background:'transparent',}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div style={{
          borderColor:'white',
          borderWidth:'1px',
          borderStyle:'solid',
          padding:'2px',
          height:'20px',
          width:'20px',
          borderRadius:'20px'
        }}>
          <font color='white'><b>&#x3f;</b></font>
        </div>

        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'transparent', width:'300px'}}>
          <ul style={{listStyleType:'none'}}>
            <li>
              <TransparentButton value='About zPYLON'/>
            </li>

            <li> 
              <TransparentButton value='FAQ'/>
            </li>
            <li> 
              <TransparentButton value='Contact'/>
            </li>
            <li> 
              <hr></hr>
            </li>
            <li> 
              <TransparentButton value='Twitter'/>
            </li>
            <li> 
              <TransparentButton value='Telegram'/>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      

    </div>
  );
}
