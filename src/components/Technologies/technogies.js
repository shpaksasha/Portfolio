import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    caption: {
        marginTop: ' 40px',
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '50px',
        lineHeight: '120%',
        color: '#151145'
    },
    description: {
        marginTop: '24px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#333333'
    },
    button: {
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#FFFFFF',
        letterSpacing: '0.05em',
        fontFamily: 'Regular',
        marginTop: '35px',
        background: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '14px 25px',
        '&:hover': {
            color: '#29AAE1',
            background: 'rgba(150, 224, 255, 0.80)',
            border: '2px solid #29AAE1',
            boxSizing: 'border-box'
        }
    },
    descriptionItem: {
        marginTop: '7px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#828282'
    },
    link: {
        paddingTop: '11px',
        paddingBottom: '11px',
        borderTop: '1px solid #BDBDBD',
        fontSize: '16px',
        lineHeight: '150%',
        '& a': {
            fontFamily: 'Poppins',
            textDecoration: 'none',
            color: '#333333',
        }
    },
    linkFirst: {
        paddingTop: '11px',
        paddingBottom: '11px',
        fontSize: '16px',
        lineHeight: '150%',
        '& a': {
            fontFamily: 'Poppins',
            textDecoration: 'none',
            color: '#333333',
        }
    },
    captionItem: {

        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '26px',
        color: '#151145'
    },
    textBlock: {
        marginLeft: '80px'
    },
    allBlock: {
        marginTop: '60px'
    },
}))


const Technologies = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container md={12} spacing={0}>
                <Grid container md={12}>
                    <Grid item md={6}>
                        <Typography className={classes.caption}>Requirements Analysis</Typography>
                        <Typography className={classes.description}>We strive to be an industry leader in software
                            development. Our expertise in requirements analysis is one of the cornerstones of our
                            ability to achieve that goal.
                            <p>Simply put, we’re rigorous in our approach and determined to ensure an accurate build,
                                whether we’re developing an app for your in-house team, a consumer-facing website or
                                something else completely.</p></Typography>
                        <Button variant='contained' className={classes.button}>
                            Start your project
                        </Button>
                    </Grid>
                    <Grid item md={6}>
                        <object type='image/svg+xml' data={'/images/techno1.svg'}
                                width='750px' height='440px'/>
                    </Grid>
                </Grid>

                <Grid container md={12} spacing={10} className={classes.allBlock}>
                    <Grid item md={4}>
                        <Typography className={classes.descriptionItem}>Page content:</Typography>
                        <Typography className={classes.linkFirst}><a target='_blank'
                                                                   href='https://www.pexels.com/search/business/'>1. Картинки
                            для сайта</a></Typography>
                        <Typography className={classes.link}><a target='_blank'
                                                                  href='https://footballua.tv/schedule'>2. Телеканалы
                            Футбол 1,2,3</a></Typography>
                        <Typography className={classes.link}><a target='_blank' href='https://oll.tv/ru/'>3. Oll.tv</a></Typography>
                        <Typography className={classes.link}><a target='_blank'
                                                                  href='https://football.ua/'>4. Football.ua</a></Typography>
                    </Grid>
                    <Grid item md={7} className={classes.textBlock}>
                        <Typography className={classes.captionItem}>What Is Requirements Analysis?</Typography>
                        <Typography className={classes.description}>You can think of requirements analysis as due
                            diligence in some ways. It’s the name given to the collection of processes and techniques
                            used to ensure that whatever is being developed (an app, a software suite, a website, etc.)
                            matches user expectations and stakeholder requirements.</Typography>
                        <Typography className={classes.captionItem}>The Benefits Analysis Process</Typography>
                        <Typography className={classes.description}>Our multi-step requirements analysis process is
                            designed to ensure accuracy in design and development, based on our expert skills in
                            analysis, documenting, validation and management.

                            <p>Our process begins by eliciting requirements from various stakeholders within your
                                organisation, as well as the expectations of stakeholders outside your organisation,
                                your customers and suppliers. Next, we analyse those requirements. Are they actionable?
                                Can they be documented? Are they measurable and testable? Do they facilitate system
                                design?</p>

                            <p>Throughout this process, we model requirements through process specifications, user case
                                studies, natural language documents, user stories and so on. The goal is to ensure that
                                the software delivered has the optimum functionality, performance, usability and
                                reliability, while fulfilling user expectations and needs.</p></Typography>
                        <Typography className={classes.captionItem}>Requirements Analysis Techniques and
                            Methods</Typography>
                        <Typography className={classes.description}>Our team of industry-leading IT specialists is well
                            versed in the latest requirements analysis techniques to ensure that we always utilise the
                            right tools for each business. We employ the following repertoire of requirements analysis
                            methods and techniques:</Typography>
                        <Typography className={classes.description}><p>• Business Process Modelling Notation – We create
                            graphs to illustrate business processes and to make it simpler to design process
                            improvements.</p>

                            <p>• Unified Modelling Language – Using a set of integrated diagrams, our experts can
                                specify, visualise and develop software, complete with documentation. This is a useful
                                tool for validating architectural designs, as well as for developing object-oriented
                                software.</p>

                            <p>• Data Flow Diagramming – A data flow diagram allows us to visualise incredibly complex
                                systems and processes with many moving parts that cannot be easily described in words
                                alone. Think of it as a blueprint or schematic that shows how each part interacts with
                                the rest of the system to create a cohesive whole.</p>
                            <p>• Business Process Modelling Notation – We create graphs to illustrate business processes
                                and to make it simpler to design process improvements.</p>

                            <p>• Unified Modelling Language – Using a set of integrated diagrams, our experts can
                                specify, visualise and develop software, complete with documentation. This is a useful
                                tool for validating architectural designs, as well as for developing object-oriented
                                software.</p>

                            <p>• Data Flow Diagramming – A data flow diagram allows us to visualise incredibly complex
                                systems and processes with many moving parts that cannot be easily described in words
                                alone. Think of it as a blueprint or schematic that shows how each part interacts with
                                the rest of the system to create a cohesive whole.</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default Technologies;