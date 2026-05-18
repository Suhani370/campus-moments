import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    background: 'linear-gradient(to right, #141e30, #243b55)',
boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
color: '#ffffff',
fontWeight: 'bold',
fontFamily: 'Poppins',
  },
  image: {
    marginLeft: '15px',
  },
}));
