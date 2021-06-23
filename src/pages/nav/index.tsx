import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navText: {
    textTransform: 'none',
    fontSize: 20,
  },
  titleButton: {
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navButton: {
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
    },
    margin: theme.spacing(0, 1),
  },
  navOptions: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))

interface NavButtonProps extends ButtonProps {
  children: React.ReactNode
  to: string
}

const NavButton = ({ children, to, ...props }: NavButtonProps) => {
  const classes = useStyles()

  return (
    <Link to={to}>
      <Button {...props} color="inherit" className={classes.navButton}>
        <Typography className={classes.navText} color="primary">
          {children}
        </Typography>
      </Button>
    </Link>
  )
}

export default function ButtonAppBar() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid className={classes.title}>
            <NavButton to="/">jack hudson</NavButton>
          </Grid>
          <IconButton
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.navOptions}>
            <NavButton to="/about-me">about me</NavButton>
            <NavButton to="/projects">projects</NavButton>
          </span>
        </Toolbar>
      </AppBar>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/about-me">
          <MenuItem onClick={handleClose}>about me</MenuItem>
        </Link>
        <Link to="/projects">
          <MenuItem onClick={handleClose}>projects</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
