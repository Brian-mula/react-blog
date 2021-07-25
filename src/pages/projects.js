import { Container, Grid } from "@material-ui/core";
import React from "react";
import ProjectCards from "../components/ProjectCards";
import projects from "../pages/data";

function Projects() {
  return (
    <Container>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={3} key={project.id}>
            <ProjectCards project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
