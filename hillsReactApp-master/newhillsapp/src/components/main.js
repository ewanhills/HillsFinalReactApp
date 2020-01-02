import React from 'react';
import  {Switch, Route}  from 'react-router-dom';
//no js file addon needed for the seperate pages
import LandingPage from  './landingpage';

import Contact from './contact';
import Projects from './projects';
import Feedback from './feedback';
import ItemPage from './ItemPage';
import ItemList from './ItemList'
import ItemForm from './ItemForm'



const Main = () => (
<Switch>
<Route exact path="/" component={LandingPage} />
<Route path="/resume" component={LandingPage} />
<Route path="/contact" component={Contact} />
<Route path="/projects" component={Projects} />
<Route path="/feedback" component={Feedback} />
<Route path="/ItemPage" component={ItemPage} />
<Route path="/ItemList" component={ItemList} />
<Route path="/ItemForm" component={ItemForm} />





</Switch>

)

export default Main;