import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory, IndexRoute} from 'react-router'

//this client talks to graphql backend and stores data to be used on FE
import ApolloClient from 'apollo-client'

//glue layer between react app and apollo backend
import {ApolloProvider} from 'react-apollo'

import SongList from "./components/SongList";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";


const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
