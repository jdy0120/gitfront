import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
// import NowTime from './components/NowTime';
import SearchFriend from './components/Friends/SearchFriend';
import GetHoliday from './components/GetHoliday';
import NowTime from './components/NowTime';

function App() {
  return (
    <BrowserRouter>
      {/* <NowTime /> */}
        <ul>
          <li>
            <Link to='/nowtime'>현재시간을 확인하세요</Link>
          </li>
          <li>
            <Link to='/profile'>친구들의 정보를 확인하세요</Link>
          </li>
          <li>
            <Link to='/showholiday'>이번년도 휴일을 알아보세요</Link>
          </li>
        </ul>
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
