import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import { Container, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles({
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  body: {
    margin: 0,
    boxSizing: "border-box",
  },
  field: {
    backgroundColor: "white",
  },
  icon: {
    fontSize: 60,
    marginBottom: -15,
    marginRight: 10,
  },
});

const App = () => {
  const classes = useStyles();
  const [markdown, setMarkdown] = React.useState("## Hello World");
  return (
    <div className={classes.body}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          className={classes.header}
          gutterBottom
        >
          <CodeIcon className={classes.icon} />
          Markdown Preview
        </Typography>
        <Grid container spacing={6}>
          <Grid item sm={12} md={6}>
            <TextField
              variant="outlined"
              fullWidth
              value={markdown}
              className={classes.field}
              multiline
              rows={25}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
