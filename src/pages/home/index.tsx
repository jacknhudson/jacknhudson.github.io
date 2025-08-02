import React from 'react'
import { Button, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  home: {
    padding: theme.spacing(4, 0, 6),
  },
  photoWrapper: {
    margin: 'auto',
  },
  jack: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    width: '90%',
    borderRadius: '900px',
    maxWidth: '240px',
    display: 'block',
    margin: 'auto',
  },
  descriptionWrapper: {
    display: 'table',
    height: '100%',
    maxWidth: '90%',
    margin: 'auto',
  },
  description: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
  },
  subDescription: {
    fontSize: '1.3rem',
  },
  homeButton: {
    width: '170px',
    margin: '10px',
    marginRight: '10px',
    marginLeft: '10px',
    textAlign: 'center',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <main>
        <div className={classes.home}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item md={5} sm={12} className={classes.photoWrapper}>
                <img
                  className={classes.jack}
                  alt="Jack Hudson"
                  src={process.env.PUBLIC_URL + '/img/jack-square.jpg'}
                />
              </Grid>
              <Grid item md={7} sm={12}>
                <Grid className={classes.descriptionWrapper}>
                  <Grid className={classes.description}>
                    <Typography
                      component="h1"
                      variant="h3"
                      align="center"
                      color="textPrimary"
                      className={classes.title}
                      gutterBottom
                    >
                      hi, i&apos;m jack.
                    </Typography>
                    <Typography
                      variant="h4"
                      align="center"
                      color="textSecondary"
                      paragraph
                      className={classes.subDescription}
                    >
                      i enjoy creating effective solutions to critical problems. i&apos;m currently
                      building the future of sustainability and automation{' '}
                      <a
                        className="MuiTypography-colorPrimary"
                        href="https://tesla.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @tesla
                      </a>
                      .
                    </Typography>
                    <Link to="about-me">
                      <Button variant="contained" className={classes.homeButton} color="primary">
                        about me
                      </Button>
                    </Link>
                    <Link to="projects">
                      <Button variant="contained" className={classes.homeButton} color="secondary">
                        projects
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  )
}
