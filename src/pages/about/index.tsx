import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(3),
    color: '#444',
    lineHeight: '100%',
  },
  subtitle: {
    fontSize: 13,
    color: theme.palette.text.secondary,
  },
  detailsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  details: {
    paddingTop: theme.spacing(3),
  },
  link: {
    color: theme.palette.primary.main,
  },
  photoWrapper: {
    margin: 'auto',
  },
  jack: {
    padding: theme.spacing(3),
    width: '100%',
    borderRadius: '60px',
    maxWidth: '350px',
    display: 'block',
    margin: 'auto',
  },
  descriptionWrapper: {
    maxWidth: '60%',
    margin: 'auto',
  },
  description: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    textAlign: 'left',
  },
  subTitle: {
    color: '#444',
  },
  detailsTitle: {
    fontSize: '1.3rem',
    marginBottom: 0,
    marginTop: 20,
  },
  detailsYear: {
    fontSize: '1.1rem',
    marginBottom: 10,
  },
  detailsDescription: {
    fontSize: '1.1rem',
  },
}))

function Detail({ title, subtitle, details, image }) {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item md={5} sm={12} className={classes.photoWrapper}>
        <img className={classes.jack} alt={image.alt} src={process.env.PUBLIC_URL + image.src} />
      </Grid>
      <Grid item md={7} sm={12}>
        <Grid className={classes.descriptionWrapper}>
          <Grid className={classes.description}>
            <Typography color="textPrimary" paragraph className={classes.detailsTitle}>
              {title}
            </Typography>
            <Typography color="textSecondary" paragraph className={classes.detailsYear}>
              {subtitle}
            </Typography>
            <Typography color="textPrimary" paragraph className={classes.detailsDescription}>
              {details}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function Projects() {
  const classes = useStyles()
  const details = [
    {
      title: 'shakespeare (0 - 5)',
      subtitle: 'aberdeen, scotland',
      details:
        'born in aberdeen to the two most loving parents, I spent much of my childhood creating literary masterpieces like "Tarzan 2" and directing world-class performances at home with my siblings.',
      image: {
        src: '/img/about/garden.jpg',
        alt: 'Jack Hudson',
      },
    },
    {
      title: 'woody (5)',
      subtitle: 'houston, texas',
      details:
        'hung out with airplane pilots on my 5th birthday, as we flew to the US. enjoyed a several month layover in the woodlands while learning the american way of baseball and basketball.',
      image: {
        src: '/img/about/pool.jpg',
        alt: 'Jack Hudson',
      },
    },
    {
      title: 'islander (5 - 8)',
      subtitle: 'manila, philippines',
      details:
        'hung onto my british accent for a few more years while attending british school in manila. some of my favorite memories are from family vacations: island hopping around fillipino resorts, japan, and australia.',
      image: {
        src: '/img/about/jetski.jpg',
        alt: 'Jack Hudson',
      },
    },
    {
      title: 'highlander (8+)',
      subtitle: 'houston, texas',
      details:
        'attempted to fend off bbq and tex-mex by picking up taekwondo. incredibly humbled by travelling the world - exploring over 30 countries, much thanks to fencing and family. to be continued..',
      image: {
        src: '/img/about/alexei.jpg',
        alt: 'Jack Hudson',
      },
    },
  ]

  return (
    <React.Fragment>
      <main>
        <Container maxWidth="md">
          <Typography component="h1" variant="h5" align="center" className={classes.title}>
            about me, personally
            <br />
            <i className={classes.subtitle}>
              for professionally, check out{' '}
              <a
                className={classes.link}
                href="https://www.linkedin.com/in/jnhudson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </i>
          </Typography>
        </Container>
        <Container maxWidth="md" className={classes.detailsContainer}>
          {details.map(detail => (
            <Detail {...detail} />
          ))}
        </Container>
      </main>
    </React.Fragment>
  )
}
