import React, { useState, useRef } from 'react';

import moment from 'moment';

import withEdit from '../higher-order/withEdit';

import { getUser } from '../../services/storage';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Comment(comment) {
   const [anchorEl, setAnchorEl] = useState(null);
   const canEdit = useRef(getUser() === comment.owner);

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
   };

   return (
      <li key={comment.id}>
         <h4>{comment.owner}</h4>
         <p>{moment(comment.creationTime).format('LLL')}</p>

         {comment.renderContent()}

         {canEdit.current && (
            <div>
               <IconButton onClick={handleMenuClick}>
                  <MoreVertIcon />
               </IconButton>
               <Menu
                  id="menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
               >
                  <MenuItem onClick={() => comment.handleUpdate()}>
                     Edit
                  </MenuItem>
                  <MenuItem onClick={() => comment.handleRemove()}>
                     Delete
                  </MenuItem>
               </Menu>
            </div>
         )}
      </li>
   );
}

export default withEdit(Comment);
