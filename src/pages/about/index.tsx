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
  img: {
    width: '100%',
    borderRadius: '15px',
    maxWidth: '300px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
    fontSize: '1.25rem',
    marginBottom: 0,
    marginTop: 20,
  },
  detailsYear: {
    fontSize: '1rem',
    marginBottom: 10,
  },
  detailsDescription: {
    fontSize: '1rem',
  },
}))

function Detail({ title, subtitle, details, image }) {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item md={5} sm={12} className={classes.photoWrapper}>
        <img className={classes.img} alt={image.alt} src={process.env.PUBLIC_URL + image.src} />
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
            <Typography
              color="textPrimary"
              paragraph
              className={classes.detailsDescription}
              dangerouslySetInnerHTML={{ __html: details }}
            ></Typography>
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
      title: 'scotland',
      subtitle: '1994',
      details:
        'born in aberdeen to the two most loving parents, I spent much of my childhood creating literary masterpieces like "Tarzan 2" and directing world-class performances at home with my siblings.',
      image: {
        src: '/img/about/garden.jpg',
        alt: 'Family garden photo',
      },
    },
    {
      title: 'america, part one',
      subtitle: '5 years old · 1999',
      details:
        'hung out with airplane pilots on my 5th birthday, as we flew to the US. enjoyed a several month layover in the woodlands while learning the american ways of baseball and basketball.',
      image: {
        src: '/img/about/pool.jpg',
        alt: 'Swimming with grandparents',
      },
    },
    {
      title: 'philippines',
      subtitle: '5 (and a half!) years old · 1999',
      details:
        'kept my british accent for a few more years while attending british school in manila. some of my favorite memories are from family vacations: island-hopping around fillipino resorts (renting an island for a day), japan, and australia.',
      image: {
        src: '/img/about/jetski.jpg',
        alt: 'Jet skiing with siblings',
      },
    },
    {
      title: 'america, part two',
      subtitle: '8 years old · 2002',
      details:
        'fought off bbq and tex-mex by picking up taekwondo. incredibly humbled to have the opportunity to travel the world - exploring over 30 countries, much thanks to fencing and family.',
      image: {
        src: '/img/about/alexei.jpg',
        alt: 'Fencing',
      },
    },
    {
      title: 'princeton',
      subtitle: '18 years old · 2012',
      details:
        'the first day of college, my roommates and I made a pact to run together each morning. guess how long that lasted.. instead, I went on to start a company with two friends, medal at NCAAs, and become a <a style="color:#00527e" href="https://thetab.com/us/princeton/2015/10/28/cos-major-invents-late-meal-sandwich-and-immediately-becomes-a-legend-617" target="_blank">sandwich legend</a>.',
      image: {
        src: '/img/about/signschool.jpg',
        alt: 'Starting SignSchool',
      },
    },
    {
      title: 'seattle',
      subtitle: '24 years old · 2018',
      details:
        'enjoying a variety of adventures on the west coast, including canadian island-hopping, rafting, skiing, bouldering, hiking, and tackling the most critical challenges that come my way.',
      image: {
        src: '/img/about/olympic.jpg',
        alt: 'Appreciating the olympics',
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
