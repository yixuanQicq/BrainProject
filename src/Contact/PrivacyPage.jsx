/* eslint-disable */
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';

const useStyles = makeStyles((theme) => ({
    ContainerRoot: {
        marginTop: '32px',
        width: "100%",
        boxSizing: "border-box",
        marginRight: "auto",
        marginLeft: "auto",
        paddingLeft: "16px",
        paddingRight: "16px",
        maxWidth: "776px",
        display: "block"
    },
    jss2: {
        marginTop: '32px'
    },
    jss3: {
        marginTop: '24px'
    },
    jss6: {
        marginTop: '8px'
    },
    jss7: {
        margin: "48px 0px 32px"
    },
    MuiTypographyRoot1: {
        margin: '0',
        fontWeight: "400",
        fontSize: "2.125rem",
        lineHeight: "1.235",
        letterSpacing: "0.00735em",
        marginBottom: "0.35em"
    },
    MuiTypographyRoot2: {
        margin: '0',
        fontWeight: "400",
        fontSize: "1.5rem",
        lineHeight: "1.334",
        letterSpacing: "0em",
        marginBottom: "0.35em"
    },
    MuiTypographyRoot3: {
        margin: '0',
        fontWeight: "400",
        fontSize: "0.875rem",
        lineHeight: "1.43",
        letterSpacing: "0.01071em",
        marginBottom: "16px"
    },
    MuiDividerRoot: {
      flexShrink: '0',
      borderWidth: '0',
      borderStyle: 'solid',
      borderBottomWidth: 'thin'
    },
    h1: {
        display: "block",
        fontSize: "2em",
        marginBlockStart: "0.67em",
        marginBlockEnd: "0.67em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        fontWeight: 'bold'
    },
    h2: {
        display: 'block',
        fontSize: '1.5em',
        marginBlockStart: '0.83em',
        marginBlockEnd: '0.83em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        fontWeight: 'bold',
    },
    p: {
        display: 'block',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',

    },
    ul: {
        display: 'block',
        listStyleType: 'disc',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '40px'
    }
}));

export default function Privacy(props) {
    const classes = useStyles();

    return (
        <section>
            <Header></Header>
            <div className={classes.ContainerRoot}>
                <div>
                    <div>
                        <h1 className={`${classes.MuiTypographyRoot1} ${classes.jss2} ${classes.h1}`}>Privacy Notice Regarding the Use of the Contact Form</h1>
                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                            This privacy notice aims to inform you about the information collected when contacting us via the contact form provided by the CentileBrain website.
                        </p>

                        <h2 className={`${classes.MuiTypographyRoot2} ${classes.jss3} ${classes.h2}`}>Information collected via the Contact Form</h2>
                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                            We will collect any information you enter directly on the contact form. This will include your first and last name and your email and any text you enter in the contact form.
                        </p>

                        <h2 className={`${classes.MuiTypographyRoot2} ${classes.jss3} ${classes.h2}`}>How And On What Grounds We Use The Information</h2>
                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                            We will use the information we collect via our website:
                        </p>
                        <ul className={classes.ul}>
                            <li className={classes.jss6}>
                                <span className={`${classes.MuiTypographyRoot3}`}>
                                    To respond to the query submitted by you in the contact form;
                                </span>
                            </li>
                            <li className={classes.jss6}>
                                <span className={`${classes.MuiTypographyRoot3}`}>
                                To send you information about publications and events if you have subscribed to our newsletter option
                                </span>
                            </li>
                            <li className={classes.jss6}>
                                <span className={`${classes.MuiTypographyRoot3}`}>
                                    To administer our website, and for internal operations such as troubleshooting and contact data analysis;
                                </span>
                            </li>
                            <li className={classes.jss6}>
                                <span className={`${classes.MuiTypographyRoot3}`}>
                                    To improve our website to ensure that content is presented in the most effective manner for you and for your computer;
                                </span>
                            </li>
                            <li className={classes.jss6}>
                                <span className={`${classes.MuiTypographyRoot3}`}>
                                    As part of our efforts to keep our website secure. Our use of your Personal Information may be based on our legitimate interest to ensure network, information security and website performance improvement.
                                </span>
                            </li>
                            <li className={classes.jss6}>
                                <span className={`${classes.MuiTypographyRoot3}`}>
                                   We do not share or disclose any information to third parties.
                                </span>
                            </li>
                        </ul>

                        <h2 className={`${classes.MuiTypographyRoot2} ${classes.jss3} ${classes.h2}`}>Duration of storage of information submitted via the Contact Form</h2>
                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                            Your information will be stored for different periods of time depending on the category. In principle, personal information and the content of the contact form will be deleted automatically based on specific schedules. If you have opted to subscribe to the newsletter, your name and email will be stored for as long as you remain a subscriber. Finally, we might further retain information for practices based on our legitimate interest or legal purposes, such as network improvement, fraud prevention, or enforcing our legal rights.
                        </p>

                        <h2 className={`${classes.MuiTypographyRoot2} ${classes.jss3} ${classes.h2}`}>Your Privacy Rights</h2>
                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                            You may decide not to use the contact form provided. Have the option of opting-in to your mailing list at any point and for those already subscribed you have the option of opting out at any point. When you opt-out the information stored will be deleted at the next scheduled update.
                        </p>

                        <h2 className={`${classes.MuiTypographyRoot2} ${classes.jss3} ${classes.h2}`}>International Data Transfers</h2>
                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                            Personal Information you submit on CentileBrain and related supporting services may be sent to the United States and processed there or in other countries, on our service providers’ cloud servers.
                        </p>

                        <h2 className={`${classes.MuiTypographyRoot2} ${classes.jss3} ${classes.h2}`}>Changes to the Privacy Notice</h2>
                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                            We may change this privacy notice in the context of website or service updates or when required by law. We will alert you to material changes by, for example, placing a notice on our Website when we are required to do so by applicable law. Otherwise, you are responsible for periodically reviewing this Privacy Notice. You can see when this Privacy Notice was last updated by checking the date at the top of this page.
                        </p>

                        <hr className={`${classes.MuiDividerRoot} ${classes.jss7}`}></hr>

                        <p className={`${classes.MuiTypographyRoot3} ${classes.p}`}>
                        Last Update: September 7th, 2021
                        </p>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </div>
                </div>
            </div>
        </section>
    );
}
