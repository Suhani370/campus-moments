
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
paper: {
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: 'rgba(15,23,42,0.75)',
backdropFilter: 'blur(10px)',
  color: 'white',
  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
},
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
