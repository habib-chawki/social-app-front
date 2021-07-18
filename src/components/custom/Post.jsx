import React, { useRef } from 'react';
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
   const [anchorEl, setAnchorEl] = React.useState(null);
   const canEdit = useRef(getUser() === post.owner._id);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleRemove = () => {};

   const handleUpdate = () => {
      post.handleUpdate();
      handleClose();
   };

   const handleClose = () => {
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
            subheader={post.createdAt}
            action={
               canEdit.current && (
                  <div>
                     <IconButton onClick={handleClick}>
                        <MoreVertIcon />
                     </IconButton>
                     <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                     >
                        <MenuItem onClick={handleUpdate}>Edit</MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                     </Menu>
                  </div>
               )
            }
         />

         <CardContent>{post.renderContent()}</CardContent>
         {canEdit.current && (
            <button onClick={() => post.handleRemove()}>delete</button>
         )}
         {canEdit.current && <button onClick={handleUpdate}>update</button>}

         <Comments id={post.id} comments={post.comments} />
      </Card>
   );
}

export default withEdit(Post);
