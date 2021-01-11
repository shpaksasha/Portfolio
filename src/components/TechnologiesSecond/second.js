import React from 'react';
import {useStyles} from './second.styles';
import {Grid, Typography, Hidden} from '@material-ui/core';


const Second = () => {
    const classes = useStyles();
    return (
        <Grid item md={12} sm={12} className={classes.allBlock}>
            <Grid container md={12} sm={12} spacing={10}>
                <Hidden smDown>
                <Grid item md={4}>
                    <Typography className={classes.captionItem}>Page content:</Typography>
                    <Typography className={classes.firstLink}><a target='_blank'
                                                                 href='https://www.pexels.com/search/business/'>1.
                        Картинки
                        для сайта</a></Typography>
                    <Typography className={classes.link}><a target='_blank'
                                                            href='https://footballua.tv/schedule'>2. Телеканалы
                        Футбол 1,2,3</a></Typography>
                    <Typography className={classes.link}><a target='_blank' href='https://oll.tv/ru/'>3.
                        Oll.tv</a></Typography>
                    <Typography className={classes.link}><a target='_blank'
                                                            href='https://football.ua/'>4. Football.ua</a></Typography>
                </Grid>
                </Hidden>
                <Grid item md={7} sm={12} className={classes.descriptionBlock}>
                    <Typography className={classes.caption}>What Is Requirements Analysis?</Typography>
                    <Typography className={classes.description}>You can think of requirements analysis as due
                        diligence in some ways. It’s the name given to the collection of processes and techniques
                        used to ensure that whatever is being developed (an app, a software suite, a website, etc.)
                        matches user expectations and stakeholder requirements.</Typography>
                    <Typography className={classes.caption}>The Benefits Analysis Process</Typography>
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
                    <Typography className={classes.caption}>Requirements Analysis Techniques and
                        Methods</Typography>
                    <Typography className={classes.description}>Our team of industry-leading IT specialists is well
                        versed in the latest requirements analysis techniques to ensure that we always utilise the
                        right tools for each business. We employ the following repertoire of requirements analysis
                        methods and techniques:</Typography>
                    <Typography className={classes.description}>
                        <p>• Business Process Modelling Notation – We create
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
    )
};

export default Second;
