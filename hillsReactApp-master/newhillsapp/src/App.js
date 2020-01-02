import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Route, Link,  } from 'react-router-dom';
import ItemPage from '../src/components/ItemPage';
import ItemForm from '../src/components/ItemForm';


function App() {
    return (
        <div classname="demo-big-content">
            <Layout>
                <Header classname="header-color" title="Title" scroll>
                    <HeaderRow title="Joe Bloggs Ceramics">
                        <Textfield
                            value=""
                            onChange={() => { }}
                            label="Search2"
                            expandable
                            expandableIcon="search"
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/resume">Home</Link>
                            <Link to="/projects">Items</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/feedback">Feedback</Link>
                            <Link to="ItemPage">ShopItems</Link>
                            <Link classname="item"  to="ItemForm">AddItem</Link>
                            
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/resume">Landing</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/feedback">Feedback</Link>
                        <Link to="ItemPage">ShopItems</Link>
                        <Link classname="item"  to="ItemForm">AddItem</Link>
                        
                        


                    </Navigation>
                </Drawer>
                <Content>
               
                <Route exactly path='/games' component={ItemPage} />
<Route exact path='/games/new' component={ItemForm} />
<Route exact path='/games/:id/edit' component={ItemForm} />

                    <div classname="page-content" />
                
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;