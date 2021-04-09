import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import { Button } from '@material-ui/core'
import GetHoliday from './components/GetHoliday';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NowTime from './components/NowTime';
import React from 'react';
import SearchFriend from './components/Friends/SearchFriend';

const LinkStyle = {
  textDecoration: 'none',
  color: 'green'
}

function App() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <BrowserRouter>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link style={LinkStyle} to='/nowtime'>현재시간을 확인하세요</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={LinkStyle} to='/profile'>친구들의 정보를 확인하세요</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={LinkStyle} to='/showholiday'>이번년도 휴일을 알아보세요</Link></MenuItem>
      </Menu>
        <hr/>
      <Switch>
        {/* <Route path='/' exact={true} component={NowTime}/> */}
        <Route path='/nowtime' exact component={NowTime}/>
        <Route path='/profile' exact component={SearchFriend}/>
        <Route path='/showholiday' exact component={GetHoliday} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
