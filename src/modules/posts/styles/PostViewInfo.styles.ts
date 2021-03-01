import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    marginLeft: theme.spacing(9),
    marginTop: '20px',
    minHeight: '550px',
  },
  authorBlock: {
    minHeight: '100px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 0 0 20px',
  },
  loading: {
    position: 'absolute',
    top: '50%',
    msTransform: 'translateY(-50%)',
    transform: 'translateY(-50%),',
  },
  avatar: {
    marginRight: theme.spacing(4),
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    filter: 'grayscale(100%)',
  },
  directions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '20px',
  },
  direction: {
    marginRight: '5px',
  },
  title: {
    textAlign: 'center',
  },
  contentRoot: {
    position: 'relative',
    minHeight: '550px',
  },
  createdAt: {
    color: theme.palette.info.light,
  },
  dataBox: {
    margin: theme.spacing(4),
  },
  content: {
    margin: theme.spacing(4),
    '& h1': {
      fontSize: '2em',
    },
    '& h2': {
      fontSize: '1.5em',
    },
  },
}));
