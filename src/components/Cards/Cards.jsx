import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
const Cards = ( {data:{confirmed , recovered, deaths, lastUpdate}} )=> {
    console.log(confirmed);
    if(!confirmed){
        return 'Loading ....'
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2"> number of active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2">Number of recoveries from  COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;