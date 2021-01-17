import React from 'react'
import Layout from './Layout'
import {Route, useRouteMatch, Switch} from 'react-router-dom'
import Movie from '../pages/Movie'
import Dashboard from '../pages/Dashboard'



const Home = (props)=>{
    const {path,url} = useRouteMatch()
    return(
        <div>
            <Layout>
                <Switch>
                    <Route exact path={path}>
                        <Dashboard/>
                    </Route>
                    <Route exact path={`/movie/:id`}>
                        <Movie/>
                    </Route>
                </Switch>
            </Layout>
        </div>
    )   
}

export default Home;