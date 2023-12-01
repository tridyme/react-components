import React, { useState } from 'react';
import {
  Tooltip,
  IconButton
} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import './ToolTips.css';

const ToolTips = (props) => {
  // const [status, setStatus] = useState(false);
  return (
    // <div className="tooltips">
    //   <div className="groupInfo" id={props.target}>
    //     <HelpIcon className="icon" />
    //   </div>
    //   <Tooltip placement="top" isOpen={status} target={props.target} toggle={() => setStatus(!status)}>
    //     {props.description}
    //   </Tooltip>
    // </div>
    <Tooltip title={props.description} placement="top">
      <IconButton style={{color :  props.color}} > 
        <HelpIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ToolTips;