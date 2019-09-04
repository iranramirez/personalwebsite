import React from 'react'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'


const Projects = () => {

    return (
        <section>
            <Grid>
                <Cell col={12}>
                    <div className="project-grid">
                        {/* Project 1 */ }
                        <Card shadow={5} className="card-style">
                            <CardTitle 
                                style=
                                    {{  color: 'black', 
                                        height: '176px', 
                                        background: 'url(https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/738/497/datas/original.png) center / cover'
                                    }}
                            >
                                Alfred: Automated Flight Attendant
                            </CardTitle>
                            <CardText>
                                Our team placed 4th overall and 2nd in the American Airlines challenge at TAMUhack.
                                My expertise of electronics and software systems integration was used to 
                                help our cart move and dispense a beverage once it arrived at it's destination.
                                <br/>
                                <br/>
                                <br/>
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a 
                                        href="https://devpost.com/software/robotic-flight-attendant-alfred" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        Devpost
                                    </a>
                                </Button>
                                <Button colored>
                                    <a 
                                        href="https://www.instagram.com/p/BtOXjKUnYvW/" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        Live Demo
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                        {/* Project 2 */ }
                        <Card shadow={5} className="card-style">
                        <CardTitle 
                            style=
                                {{  color: 'black',
                                    height: '176px', 
                                    background: 'url(https://yt3.ggpht.com/a/AGF-l7-sAisPdk0BZzT2zp0b9_Xl53Ys2UeWZ6o5qw=s900-c-k-c0xffffffff-no-rj-mo) center / cover'
                                }}
                        >
                                Automated Residential Door Opener
                        </CardTitle>
                            <CardText>
                                Our team placed 1st at Aggies Invent: Assistive Techonology 2018. We created a retrofitted system
                                that allows a person with physical disabilites to be able to open their door unassisted. My expertise in electronics and software integration was used to
                                help open the door remotely using ngrok, arduino, and DC motors.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a 
                                        href="https://www.instagram.com/p/BhXrfu3nBGu/" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        Live Demo
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                        {/* Project 3 */ }
                        <Card shadow={5} className="card-style">
                            <CardTitle 
                                className='card-title'
                                style=
                                    {{  color: 'white', 
                                        height: '176px', 
                                        background: 'url(https://thebite.aisb.ro/wp-content/uploads/personal-project.jpg) center / cover'
                                    }}
                            >
                                Electornic Name Tag
                            </CardTitle>
                            <CardText>
                                I made an electornic nametag for the Texas A&M Engineering 
                                Career Fair. I used an Arduino, Arduino LCD Shield, 9V Battery, Barrel Jack adapter,
                                and designed and 3D printed the housing and battery holder.
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a 
                                        href="https://github.com/iranramirez" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        Github
                                    </a>
                                </Button>
                                <Button colored>
                                    <a 
                                        href="https://www.instagram.com/iranonoiran/" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        Live Demo
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Cell>
            </Grid>
        </section>
    )
}


export default Projects