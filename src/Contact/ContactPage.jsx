/* eslint-disable */
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useAlert from '../hooks/useAlert';
import emailjs from 'emailjs-com';
import AlertMessage from "./AlertMessage";
import Header from '../Home/Header';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    firstBox: {
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(6)
        },
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    secondBox: {
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(6)
        },
    },
    fullHeightImage: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        objectFit: 'cover',
        height: '75%',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    submitButton: {
        background: 'darkblue',
        color: 'white',
    },
}));

export default function ContactPage(props) {
    const classes = useStyles();

    const alertHook = useAlert();
    const [checked, setChecked] = useState(false);

    const content = {
        'header': 'Contact Us',
        'description': 'We\'re here to answer questions and discuss your experience.',
        'terms': 'I agree to the terms of use and privacy policy.',
        'primary-action': 'Submit',
        'image': 'https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Contact/contact.png',
        ...props.content
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (checked) {
            emailjs.sendForm(
                'service_6tv122f',
                'template_yrqauic',
                e.target,
                'user_WPtiObpoETDwcD69DXOVA'
            ).then(res => {
                }
            ).catch(err => {
                    console.error(err);
                }
            );

            e.target.reset();
            setChecked(false);

            alertHook.switchToSuccess("Email sent successfully.");
        } else {
            alertHook.switchToFailure("Please select \"I agree to the terms of use and privacy policy\".");
        }
    };

    return (
        <section>
            <Header></Header>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box pt={10} display="flex" className={classes.firstBox}>
                        <Container>
                            <Box mb={4}>
                                <Typography variant="h4" component="h2" gutterBottom={true}>{content['header']}</Typography>
                                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                            </Box>

                            <form onSubmit={onSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField variant="outlined" required fullWidth autoComplete="fname" name="firstName" id="firstName" label="First Name" autoFocus/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField variant="outlined" required fullWidth autoComplete="lname" name="lastName" id="lastName" label="Last Name" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth autoComplete="email" name="email" id="email" label="Email Address" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" fullWidth autoComplete="company" name="company" id="company" label="Company" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required multiline rows={5} fullWidth autoComplete="message" name="message" id="message" label="Message" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel control={<Checkbox checked={checked} onChange={() => {setChecked(!checked)}} name="terms" color="primary" />} label={content['terms']} />
                                        <p>
                                            <Link to='/privacy'>view our privacy policy</Link>
                                        </p>
                                    </Grid>
                                </Grid>
                                <Box mt={2}>
                                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submitButton}>
                                        {content['primary-action']}
                                    </Button>
                                </Box>
                            </form>
                            <br />
                            <AlertMessage alertHook={alertHook} />
                        </Container>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box pt={10} display="flex" height={768}>
                        <img className={classes.fullHeightImage} src={content['image']} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </section>
    );
}
