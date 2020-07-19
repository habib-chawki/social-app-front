import React, { useState } from 'react';

function withEdit(Component) {
   return (props) => {
      const [editContent, setEditContent] = useState(false);
      const [editedContent, setEditedContent] = useState(props.content);

      // update component
      const handleUpdate = () => {
         if (editContent) {
            props.onUpdate(props.id, editedContent);
         }
         setEditContent(!editContent);
      };

      // delete component
      const handleRemove = () => {
         props.onRemove(props.id);
      };

      // render component content
      const renderContent = () => {
         return editContent ? (
            <input
               type="text"
               value={editedContent}
               onChange={(event) => {
                  setEditedContent(event.target.value);
               }}
            />
         ) : (
            <p>{props.content}</p>
         );
      };

      return (
         <Component
            {...props}
            renderContent={renderContent}
            handleUpdate={handleUpdate}
            handleRemove={handleRemove}
         />
      );
   };
}

export default withEdit;
