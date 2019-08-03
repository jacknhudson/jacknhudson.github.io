import React from 'react'
import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  enabled: {
    '&:hover, &:focus': {
      boxShadow:
        '2px 3px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    },
  },
  disabled: {
    color: 'rgba(0, 0, 0, 0.7)',
    boxShadow: 'none',
    border: '2px solid #f7f7f7',
    opacity: 0.9,
    '&:hover, &:focus': {
      boxShadow: 'none',
    },
  },
  project: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    maxWidth: '350px',
    margin: 'auto',
  },
  projects: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  projectBlurb: {
    flexGrow: 1,
    maxWidth: '215px',
    margin: 'auto',
  },
  projectLogo: {
    maxWidth: '80%',
    height: '80px',
    margin: 'auto',
    marginTop: theme.spacing(2),
  },
  title: {
    paddingTop: theme.spacing(3),
  },
}))

const projects = [
  {
    id: 'signschool',
    logo: 'signschool.png',
    description: 'online learning platform for american sign language',
    link: 'https://www.signschool.com',
  },
  {
    id: 'signstudy',
    logo: 'signstudy.png',
    description: 'collaborative american sign language research platform',
    link: 'https://www.signstudy.org',
  },
  {
    id: 'eyewire museum',
    logo: 'eyewire.jpg',
    description: 'open-source repository for connectomic neurons',
    link: 'http://museum.eyewire.org',
  },
  {
    id: 'jumpstart',
    logo: 'jumpstart.png',
    description: 'crowdsourcing platform for clean energy projects',
  },
  {
    id: 'bitbot',
    logo: 'bitbot.png',
    description: 'messenger cryptocurrency virtual assistant',
  },
  {
    id: 'coinsend',
    logo: 'coinsend.png',
    description: 'real-time cryptocurrency portfolio dashboard',
  },
  {
    id: 'tigertreat',
    logo: 'tigertreat.png',
    description: 'online on-campus treat delivery service',
  },
  {
    id: 'colab',
    logo: 'colab.png',
    description: 'open-source research collaboration platform',
  },
  {
    id: 'scriblet',
    logo: 'scriblet.png',
    description: 'education tablet and document annotation tool',
  },
  {
    id: 'ponder',
    logo: 'ponder.png',
    description: 'messenger daily journal virtual assistant',
  },
  {
    id: 'zone',
    logo: 'zone.png',
    description: 'location-based automatic check-in platform',
  },
  {
    id: 'echo',
    logo: 'echo.png',
    description: "awty international school's first multilingual publication",
  },
]

interface Project {
  id: string
  logo: string
  description: string
  link?: string
}

interface ProjectProps {
  project: Project
}

const Project = ({ project }: ProjectProps) => {
  const classes = useStyles()
  const projectCard = (
    <Card
      className={
        !project.link
          ? classnames(classes.project, classes.disabled)
          : classnames(classes.project, classes.enabled)
      }
    >
      <img src={`/img/logos/${project.logo}`} alt={project.id} className={classes.projectLogo} />
      <CardContent className={classes.projectBlurb}>
        <Typography gutterBottom variant="h5" component="h2">
          {project.id}
        </Typography>
        <Typography>{project.description}</Typography>
      </CardContent>
    </Card>
  )

  return project.link ? (
    <a href={project.link} rel="noopener noreferrer" target="_blank">
      {projectCard}
    </a>
  ) : (
    projectCard
  )
}

export default function Projects() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <main>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          projects
        </Typography>
        <Container className={classes.projects} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map(project => (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <Project project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}
