import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeMenu from '../components/SwipeMenu/SwipeMenu'
import cc from '../App.module.css'

import { connect } from 'react-redux'
import { swipeMenuActive, swipeMenuDeactive } from '../store/swipeMenuReducer'


let mapStateProps = (state) => {
  return {
    isActive: state.swipemenu.isActive
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    menuActivate: () => {
      dispatch(swipeMenuActive())
    },
    menuDeactivate: () => {
      dispatch(swipeMenuDeactive())
    }
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = (props) => {
  const classes = useStyles();

  const [menu, setMenu] = useState(props.isActive);

  const foo = () => {
    switch (menu) {
      case true:
        setMenu(false);
        props.menuDeactivate();
        document.getElementById('root').classList.remove(cc.active)
        return menu;
      case false:
        setMenu(true);
        props.menuActivate();
        document.getElementById('root').classList.add(cc.active)
        return menu;
      default:
        break;
    }
  }

  console.log(menu)

  return (
    <div className={classes.root} onClick={() => { foo() }}>
      <AppBar position="static" style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
        <Toolbar>
          <IconButton onClick={() => { foo() }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" style={{ zIndex: "15" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{ zIndex: "15" }}>
            Мне вкусно !!!
          </Typography>
          <Button color="inherit" style={{ zIndex: "15" }}>Login</Button>
        </Toolbar>
      </AppBar>
      <SwipeMenu items={props.items} active={menu} />
    </div>
  );
}


export default connect(mapStateProps, mapDispatchToProps)(ButtonAppBar);

