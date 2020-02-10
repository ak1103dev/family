import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import styled from '@emotion/styled'
import { ApolloProvider } from '@apollo/react-hooks'

import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import MembersPage from './pages/Members'
import SideMenu from './components/SideMenu'
import client from './graphql'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`
const Content = styled.div`
  width: calc(100% - 200px);
  overflow: scroll;
`

function AdminLayout() {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const menus = [{
    key: 'dashboard',
    label: 'Dashboard',
    link: '/admin/dashboard',
    active: pathname.startsWith('/admin/dashboard'),
  }, {
    key: 'members',
    label: 'Members',
    link: '/admin/members',
    active: pathname.startsWith('/admin/members'),
  }]

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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
