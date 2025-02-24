import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Grid, Typography, Button, List, ListItem, Paper } from '@mui/material'; // Import Paper

function WorkExperience({ data, onChange }) {
  const [newExperience, setNewExperience] = useState({
    id: uuidv4(),
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    responsibilities: [''],
  });

  const handleInputChange = (e) => {
    setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  };

  const handleResponsibilityChange = (index, e) => {
    const updatedResponsibilities = [...newExperience.responsibilities];
    updatedResponsibilities[index] = e.target.value;
    setNewExperience({ ...newExperience, responsibilities: updatedResponsibilities });
  };

  const addResponsibility = () => {
    setNewExperience({
      ...newExperience,
      responsibilities: [...newExperience.responsibilities, ''],
    });
  };

  const removeResponsibility = (index) => {
    const updatedResponsibilities = newExperience.responsibilities.filter((_, i) => i !== index);
    setNewExperience({ ...newExperience, responsibilities: updatedResponsibilities });
  };

  const addExperience = () => {
    onChange([...data, newExperience]);
    setNewExperience({
      id: uuidv4(),
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      responsibilities: [''],
    });
  };

  return (
    <Grid container spacing={2} className="section">
      <Grid item xs={12}>
        <Typography variant="h5">Work Experience</Typography>
      </Grid>
      {data.length > 0 ? (
        data.map((exp) => (
          <Grid item xs={12} key={exp.id}>
            <Paper elevation={2} sx={{ padding: 2, marginBottom: 1 }}>
              <Typography variant="h6">{exp.jobTitle}</Typography>
              <Typography variant="subtitle1">{exp.company}</Typography>
              <Typography variant="body2">
                {exp.startDate} - {exp.endDate || 'Present'}
              </Typography>
              <List dense> {/* Use dense for a more compact list */}
                {exp.responsibilities.map((responsibility, index) => (
                  <ListItem key={index}>{responsibility}</ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="body1">No work experience added yet.</Typography>
        </Grid>
      )}

      <Grid item xs={12}>
        <Typography variant="h6">Add Work Experience</Typography>
        <TextField
          label="Job Title"
          name="jobTitle"
          value={newExperience.jobTitle}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Company"
          name="company"
          value={newExperience.company}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Start Date"
          name="startDate"
          value={newExperience.startDate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="End Date"
          name="endDate"
          value={newExperience.endDate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {newExperience.responsibilities.map((responsibility, index) => (
          <div key={index}>
            <TextField
              label="Responsibility"
              value={responsibility}
              onChange={(e) => handleResponsibilityChange(index, e)}
              fullWidth
              margin="normal"
            />
            <Button onClick={() => removeResponsibility(index)} color="error">
              Remove
            </Button>
          </div>
        ))}

        <Button variant="contained" color="primary" onClick={addResponsibility}>
          Add Responsibility
        </Button>{' '}
        <Button variant="contained" color="primary" onClick={addExperience}>
          Add Experience
        </Button>
      </Grid>
    </Grid>
  );
}

export default WorkExperience;