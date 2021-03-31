import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
// import NowTime from './components/NowTime';
import SearchFriend from './components/SearchFriend';
import GetHoliday from './components/GetHoliday';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NowTime /> */}
          <ul>
            <li>
              <Link to='/profile/조도연'>조도연</Link>
            </li>
            <li>
              <Link to='/profile/김철진'>김철진</Link>
            </li>
            <li>
              <Link to='/profile/문재훈'>문재훈</Link>
            </li>
            <li>
              <Link to='/profile/전진영'>전진영</Link>
            </li>
            <li>
              <Link to='/profile/오정민'>오정민</Link>
            </li>
            <li>
              <Link to='/profile/김준석'>김준석</Link>  
            </li>
            <li>
              <Link to='/profile/성민승'>성민승</Link>
            </li>
            <li>
              <Link to='/showholiday'>이번년도 휴일을 알아보세요</Link>
            </li>
          </ul>
          <hr/>
        <Switch>
          {/* <Route path='/' exact={true} component={NowTime}/> */}
          <Route path='/profile/:username' exact component={SearchFriend}/>
          <Route path='/showholiday' exact component={GetHoliday} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
