import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(3),
  },
}))

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
          in progress...
        </Typography>
      </main>
    </React.Fragment>
  )
}
