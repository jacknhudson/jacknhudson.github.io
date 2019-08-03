import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  home: {
    padding: theme.spacing(4, 0, 6),
  },
  photoWrapper: {
    margin: 'auto',
  },
  jack: {
    padding: theme.spacing(3),
    width: '80%',
    borderRadius: '40px',
    maxWidth: '300px',
    display: 'block',
    margin: 'auto',
  },
  descriptionWrapper: {
    display: 'table',
    height: '100%',
    maxWidth: '80%',
    margin: 'auto',
  },
  description: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  subDescription: {
    fontSize: '1.4rem',
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
              <Grid item md={6} sm={12} className={classes.photoWrapper}>
                <img
                  className={classes.jack}
                  alt="Jack Hudson"
                  src="https://raw.githubusercontent.com/jacknhudson/jacknhudson.github.io/master/img/background.jpg"
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <Grid className={classes.descriptionWrapper}>
                  <Grid className={classes.description}>
                    <Typography
                      component="h1"
                      variant="h4"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      hi, i&apos;m jack.
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                      className={classes.subDescription}
                    >
                      i love building effective solutions to critical problems. i&apos;m currently
                      working on the future of public safety{' '}
                      <a className="MuiTypography-colorPrimary" href="https://www.axon.com">
                        @axon
                      </a>
                      .
                    </Typography>
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
