import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
