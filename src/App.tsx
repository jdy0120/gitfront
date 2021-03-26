import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import NowTime from './components/NowTime';
import SearchFriend from './components/SearchFriend';
function App() {
  return (
    <BrowserRouter>
      <NowTime />
      <ul>
        <li>
          <Link to='/profile/조도연'>조도연</Link>
        </li>
        <li>
          <Link to='/profile/김철진'>김철진</Link>
        </li>
        <li>
          <Link to='/profile/문재훈'>조도연</Link>
        </li>
        <li>
          <Link to='/profile/전진영'>조도연</Link>
        </li>
        <li>
          <Link to='/profile/오정민'>조도연</Link>
        </li>
        <li>
          <Link to='/profile/김준석'>조도연</Link>  
        </li>
        <li>
          <Link to='/profile/성민승'>조도연</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path='/' exact={true} component={NowTime}/>
        <Route path='/profile/:username' component={SearchFriend} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
