import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
  } from "@material-ui/core";
  import DeleteIcon from "@material-ui/icons/Delete";
  
  function MaterialListItem(props) {
    return (
      <>
        <ListItem>
          <ListItemText primary={props.name} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => props.clickedDelete()}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </>
    );
  }
  
  export default MaterialListItem;