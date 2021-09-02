import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import moment from 'moment';

import CommentActions from './CommentActions';

import withEdit from '../../higher-order/withEdit';
import UserContext from '../../../context/user-context';

// mui components
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Comment(comment) {
   const { authenticatedUser } = useContext(UserContext);

   return (
      <ListItem key={comment.id} divider>
         <ListItemAvatar>
            <Avatar
               src={`${process.env.REACT_APP_BACKEND_AVATARS_URL}/${comment.owner.profile.avatar}`}
            />
         </ListItemAvatar>
         <ListItemText
            primary={
               <Link
                  component={RouterLink}
                  to={`user/${comment.owner._id}/profile`}
                  underline="none"
               >
                  <Typography
                     style={{ fontWeight: 600 }}
                     component="span"
                     color="secondary"
                  >
                     {comment.owner.profile.firstName +
                        ' ' +
                        comment.owner.profile.lastName}
                  </Typography>
               </Link>
            }
            secondary={
               <>
                  {moment(comment.creationTime).format('LLL')}
                  <Box mt={1}>
                     <Typography
                        variant="body2"
                        color="textPrimary"
                        component="div"
                     >
                        {comment.content}
                     </Typography>
                  </Box>
               </>
            }
         />

         <ListItemSecondaryAction>
            {
               // Determine whether user can edit comment
               authenticatedUser === comment.owner._id && (
                  <CommentActions
                     commentId={comment.id}
                     commentContent={comment.content}
                     onUpdateComment={comment.onUpdate}
                     onDeleteComment={comment.onRemove}
                  />
               )
            }
         </ListItemSecondaryAction>
      </ListItem>
   );
}

export default withEdit(Comment);
