import React from 'react';
import {Grid, GridList, SvgIcon} from "@material-ui/core";

const UserHeader = () => {
    return (
        <>
            <div className={"navbar-fake"}>
                <div className={"navbar"}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <ul style={{marginLeft: "10%"}}>
                                <li>
                                    <a href="/"><SvgIcon>
                                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                    </SvgIcon></a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={7}>
                            <ul>
                                <li><a href="/catalogue">Catalogue</a></li>
                                <li><a href="/contacts">Contacts</a></li>
                            </ul>
                        </Grid>
                        <Grid item xs={3}>
                            <ul>
                                <li style={{
                                    float: "right",
                                    marginRight: "10%"
                                }}>
                                    <a href="/profile">Profile</a></li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default UserHeader;