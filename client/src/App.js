import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import styled from '@emotion/styled'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import MembersPage from './pages/Members'
import SideMenu from './components/SideMenu'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`
const Content = styled.div`
  width: calc(100% - 200px);
`

const menus = [{
  key: 'dashboard',
  label: 'Dashboard',
  link: '/admin/dashboard'
}, {
  key: 'members',
  label: 'Members',
  link: '/admin/members'
}]

function AdminLayout() {
  const { path } = useRouteMatch();

  return (
    <Container>
      <SideMenu menus={menus} />
      <Content>
        <Switch>
          <Route exact path={`${path}/dashboard`}>
            <DashboardPage />
          </Route>
          <Route exact path={`${path}/members`}>
            <MembersPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Content>
    </Container>
  )
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <AdminLayout />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
