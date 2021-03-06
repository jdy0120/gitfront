import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Button, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Abandonment from './components/Abandonment/Abandonment';
import Calendar from "./components/Calendar/Calendar";
import GetHoliday from "./components/GetHoliday";
import GetWeather from "./components/GetWeather";
import Login from "./components/Login/Login";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SearchFriend from "./components/Friends/SearchFriend";
import { useAppContext } from "./_providers/AppProviders";

/**
 * material ui의 modal을 사용할 경우 ref오류가 생기는데 Bar를 생성해주면 해결
 * 참조 : https://www.morolog.dev/entry/React-Material-UI%EC%97%90%EC%84%9C-Modal-%EC%82%AC%EC%9A%A9%EC%8B%9C-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-Failed-prop-type-Warning-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
 */
const Bar = React.forwardRef((props: any, ref: any) => (
  <span {...props} ref={ref}>
    {props.children}
  </span>
));

const linkStyle = {
  textDecoration: "none",
  color: "green",
};

function App() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);

  const {
    state: { user },
    resetUser,
  } = useAppContext();

  const loginOpen = () => {
    setOpenLoginModal(true);
  };

  const loginClose = () => {
    setOpenLoginModal(false);
  };

  const logout = () => {
    resetUser();
  };

  const menuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(event.currentTarget);
  };

  const menuClose = () => {
    setOpenMenu(null);
  };
  useEffect(() => {}, [openLoginModal]);

  return (
    <div style={{ textAlign: "center" }}>
      {!user ? (
        <Button variant="contained" color="primary" onClick={loginOpen}>
          {"로그인"}
        </Button>
      ) : (
        <>
          <p>{user.name}{'님 환영합니다.'}</p>
          <Button onClick={logout} variant="contained" style={{ backgroundColor: user.color}}>
            {"로그아웃"}
          </Button>
        </>
      )}
      <BrowserRouter>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={menuOpen}
        >
          {'Open Menu'}
        </Button>
        <Modal
          open={openLoginModal}
          onClose={loginClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Bar>
            <Login setOpenLoginModal={setOpenLoginModal} />
          </Bar>
        </Modal>
        <Menu
          id="simple-menu"
          anchorEl={openMenu}
          keepMounted
          open={Boolean(openMenu)}
          onClose={menuClose}
        >
          <MenuItem onClick={menuClose}>
            <Link style={linkStyle} to="/gitfront/profile">
              {"친구들의 정보를 확인하세요"}
            </Link>
          </MenuItem>
          <MenuItem onClick={menuClose}>
            <Link style={linkStyle} to="/gitfront/showholiday">
              {"이번년도 휴일을 알아보세요"}
            </Link>
          </MenuItem>
          <MenuItem onClick={menuClose}>
            <Link style={linkStyle} to="/gitfront/showWeather">
              {"현재 날씨를 보고 싶어요"}
            </Link>
          </MenuItem>
          <MenuItem onClick={menuClose}>
            <Link style={linkStyle} to="/gitfront/calendar">
              {"캘린더"}
            </Link>
          </MenuItem>
          <MenuItem onClick={menuClose}>
            <Link style={linkStyle} to="/gitfront/abandonment">
              {'유기동물 찾기'}
            </Link>
          </MenuItem>
        </Menu>
        <hr />
        <Switch>
          {/* <Route path="/gitfront/nowtime" exact component={NowTime} /> */}
          <Route path="/gitfront/profile" exact component={SearchFriend} />
          <Route path="/gitfront/showholiday" exact component={GetHoliday} />
          <Route path="/gitfront/showWeather" exact component={GetWeather} />
          <Route path="/gitfront/calendar" exact component={Calendar} />
          <Route path="/gitfront/login" exact component={Login} />
          <Route path='/gitfront/abandonment' exact component={Abandonment} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
