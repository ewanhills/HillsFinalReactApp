import React, { Component } from 'react';
import { Tabs, Tab,  Cell, Card, CardTitle, CardActions, CardMenu,  CardText, IconButton } from 'react-mdl';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }

    toggleCatagories() {

        if (this.state.activeTab === 0) {
            return (
                <Card  shadow={0} style={{ width: '650px', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#080807', height: '300px', background:
                            'url(https://www.crafts.org.uk/getfile/62ea30ec-6c1c-4e9a-ac3f-ec51a7bb0770/EX_Peter-Lane-ceramic-porcelain-bowl_misty-mountai.aspx'
                    }}>
                        Ceramics</CardTitle>
                    <CardText>
                        Click the below icon to check out my Instagram to see more like this!!!
                </CardText>
                    <CardActions border>
                        {/* INSTAGRAM*/}
                        <div className="project-social-links">
                            <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </CardActions>
                    <CardMenu style={{ color: '#fff',  }}

                    
                    >
                        
                        <IconButton name="share" />
                        
                    </CardMenu>
                </Card>



            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={0} style={{ width: '650px', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#080807', height: '300px', background:
                            'url(https://www.crafts.org.uk/getfile/62ea30ec-6c1c-4e9a-ac3f-ec51a7bb0770/EX_Peter-Lane-ceramic-porcelain-bowl_misty-mountai.aspx'
                    }}>
                        Ceramic Jewelry</CardTitle>
                    <CardText>
                        Click the below icon to check out my Instagram to see more like this!!!
                </CardText>
                    <CardActions border>
                        {/* INSTAGRAM*/}
                        <div className="project-social-links">
                            <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={0} style={{ width: '650px', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#080807', height: '300px', background:
                            'url(https://www.crafts.org.uk/getfile/62ea30ec-6c1c-4e9a-ac3f-ec51a7bb0770/EX_Peter-Lane-ceramic-porcelain-bowl_misty-mountai.aspx'
                    }}>
                        Household</CardTitle>
                    <CardText>
                        Click the below icon to check out my Instagram to see more like this!!!
                </CardText>
                    <CardActions border>
                        {/* INSTAGRAM*/}
                        <div className="project-social-links">
                            <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }



        else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is a filler for a future item</h1></div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div><h1>This is a filler for a future item</h1></div>
            )
        }
    }




    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Ceramics</Tab>
                    <Tab>Ceramic Jewelry</Tab>
                    <Tab>HouseHold</Tab>
                    <Tab>Filler</Tab>
                    <Tab> Filler</Tab>
                </Tabs>
                <section className="projects-grid">
                    <grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCatagories()}</div>
                        </Cell>

                    </grid>

                </section>
            </div>
        )

    }
}

export default Project;  