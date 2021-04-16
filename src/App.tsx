import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import { Button } from '@material-ui/core'
import GetHoliday from './components/GetHoliday';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NowTime from './components/NowTime';
import React, { useEffect } from 'react';
import SearchFriend from './components/Friends/SearchFriend';
import GetWeather from './components/GetWeather';
import Calendar from './components/Calendar/Calendar';
import Login from './components/Login/Login';
import { useCookies } from 'react-cookie';

const linkStyle = {
  textDecoration: 'none',
  color: 'green'
}


function App() {
  const [cookie,setCookie,removeCookie] = useCookies(['loginToken']);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(cookie);

  return (
    <div style={{textAlign: 'center'}}>
      <BrowserRouter>
        {!cookie.loginToken ?  <p>토큰 없음</p> : <p>토큰 있음</p>}
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
          <MenuItem onClick={handleClose}><Link style={linkStyle} to='/nowtime'>현재시간을 확인하세요</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link style={linkStyle} to='/profile'>친구들의 정보를 확인하세요</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link style={linkStyle} to='/showholiday'>이번년도 휴일을 알아보세요</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link style={linkStyle} to='/showWeather'>현재 날씨를 보고 싶어요</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link style={linkStyle} to='calendar'>캘린더</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link style={linkStyle} to='login'>로그인</Link></MenuItem>
        </Menu>
          <hr/>
        <Switch>
          {/* <Route path='/' exact={true} component={NowTime}/> */}
          <Route path='/nowtime' exact component={NowTime}/>
          <Route path='/profile' exact component={SearchFriend}/>
          <Route path='/showholiday' exact component={GetHoliday} />
          <Route path='/showWeather' exact component={GetWeather} />
          <Route path='/calendar' exact component={Calendar} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
