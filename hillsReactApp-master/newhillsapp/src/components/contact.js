import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Joe Bloggs</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '275px' }}
                        />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            This is Hills, Joe makes handmade ceramic items from his .........</p>
                    </Cell>


                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '32px', fontFamily: 'Poppins'}}>
                                    
                                <i className="fa fa-phone-square" aria-hidden="true"/>  
                                (123) 123-1234
                                    
                                </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '32px', fontFamily: 'Poppins'}}>
                                    
                                <i className="fa fa-envelope-square" aria-hidden="true"/>  
                                testemail@123.com                                    
                                </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '32px', fontFamily: 'Poppins'}}>
                                    
                                <i className="fab fa-instagram" aria-hidden="true"/>  
                                "instagramtestMessage"
                                    
                                </ListItemContent>
                                </ListItem>


                            </List>
                        </div>



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;  