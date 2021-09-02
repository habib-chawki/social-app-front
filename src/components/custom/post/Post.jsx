import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import moment from 'moment';

import PostActions from './PostActions';

import Comments from '../comment/Comments';
import UserContext from '../../../context/user-context';

import {
   Card,
   CardContent,
   CardHeader,
   Avatar,
   Divider,
} from '@material-ui/core';

import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   card: {
      paddingTop: 30,
      paddingBottom: 30,
      margin: 30,
   },
});

function Post(post) {
   const { authenticatedUser } = useContext(UserContext);

   // styles
   const classes = useStyles();

   // extract post owner full name
   const { firstName, middleName, lastName } = post.owner.profile;
   const postOwnerFullName = `${firstName} ${middleName} ${lastName}`;

   return (
      <Card className={classes.card}>
         <CardHeader
            avatar={
               <Avatar
                  src={`${process.env.REACT_APP_BACKEND_AVATARS_URL}/${post.owner.profile.avatar}`}
               />
            }
            title={
               <Link
                  to={`user/${post.owner._id}/profile`}
                  component={RouterLink}
                  underline="none"
               >
                  <Typography variant="h5" component="span" color="secondary">
                     {postOwnerFullName}
                  </Typography>
               </Link>
            }
            subheader={moment(post.creationTime).format('LLL')}
            action={
               // Determine whether user can edit post
               authenticatedUser === post.owner._id && (
                  <PostActions
                     postId={post.id}
                     postContent={post.content}
                     onUpdatePost={post.onUpdate}
                     onDeletePost={post.onRemove}
                  />
               )
            }
         />

         <CardContent>
            <Typography>{post.content}</Typography>
         </CardContent>

         <Divider />

         <Comments id={post.id} comments={post.comments} />
      </Card>
   );
}

export default Post;
