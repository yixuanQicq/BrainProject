// prettier-ignore
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { v4 as uuid } from "uuid";
import { Divider, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
}));

export default function PublicationsPage(props) {
    const classes = useStyles();

    let publications = [
        {
            info: "Frangou S, Modabbernia A, Williams SCR, et al. Cortical thickness across the lifespan: Data from 17,075 \
            healthy individuals aged 3-90 years. Hum Brain Mapp. 2021;10.1002/hbm.25364. doi:10.1002/hbm.25364",
            link: "https://pubmed.ncbi.nlm.nih.gov/33595143/",
            id: uuid()
        },
        {
            info: "Dima D, Modabbernia A, Papachristou E, et al. Subcortical volumes across the lifespan: Data from 18,605 \
            healthy individuals aged 3-90 years. Hum Brain Mapp. 2021;10.1002/hbm.25320. doi:10.1002/hbm.25320",
            link: "https://pubmed.ncbi.nlm.nih.gov/33570244/",
            id: uuid()
        },
        {
            info: "Wierenga LM, Doucet GE, Dima D, et al. Greater male than female variability in regional brain structure across \
            the lifespan [published online ahead of print, 2020 Oct 12]. Hum Brain Mapp. 2020;10.1002/hbm.25204. doi:10.1002/hbm.25204",
            link: "https://pubmed.ncbi.nlm.nih.gov/33044802/",
            id: uuid()
        }
    ]


    return (
        <div>
            <Header></Header>
            <Box sx={{ m: 3 }}>
                <Typography variant="h4">Publication Page</Typography>
                <div>
                    {publications.map((publication) => <Publication key={publication.id} {...publication} />)}
                </div>
            </Box>
        </div>
    );
}


function Publication(props) {
    const { info, link } = props;
    return (
        <Box sx={{ m: 5 }}>
            <Typography variant="body1">{info}</Typography>
            <div className="info">
                <p style={{ display: "inline-block", marginRight: "1em" }}>Type: journal article</p>
                <Button variant="outlined" size="small" style={{ display: "inline-block" }} onClick={() => window.location.href = link}>Link</Button>
            </div>
        </Box>
    )
}
