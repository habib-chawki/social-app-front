import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import withEdit from '../higher-order/withEdit';
import { getUser } from '../../services/storage';

import {
   Card,
   CardContent,
   CardHeader,
   Avatar,
   IconButton,
   Menu,
   MenuItem,
} from '@material-ui/core';
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
         <Card>
            <CardHeader
               avatar={<Avatar />}
               title={
                  <Link to={`user/${comment.owner}/profile`}>
                     {comment.owner}
                  </Link>
               }
               subheader={moment(comment.creationTime).format('LLL')}
               action={
                  canEdit.current && (
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
                  )
               }
            />

            <CardContent>{comment.renderContent()}</CardContent>
         </Card>
      </li>
   );
}

export default withEdit(Comment);
