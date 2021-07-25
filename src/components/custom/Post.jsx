import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Comments from './Comments';
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

function Post(post) {
   const [anchorEl, setAnchorEl] = useState(null);
   const canEdit = useRef(getUser() === post.owner._id);

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleDeletePost = () => {
      post.handleRemove();
   };

   const handleEditPost = () => {
      post.handleUpdate();
      handleMenuClose();
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
   };

   // extract post owner full name
   const { firstName, middleName, lastName } = post.owner.profile;
   const postOwnerFullName = `${firstName} ${middleName} ${lastName}`;

   return (
      <Card>
         <CardHeader
            avatar={<Avatar alt={postOwnerFullName} />}
            title={
               <Link to={`user/${post.owner._id}/profile`}>
                  {postOwnerFullName}
               </Link>
            }
            subheader={post.creationTime}
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
                        <MenuItem onClick={handleEditPost}>Edit</MenuItem>
                        <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                     </Menu>
                  </div>
               )
            }
         />

         <CardContent>{post.renderContent()}</CardContent>

         <Comments id={post.id} comments={post.comments} />
      </Card>
   );
}

export default withEdit(Post);
