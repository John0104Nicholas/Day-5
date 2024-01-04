const resume = {
    "personalInformation": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1 (555) 123-4567",
      "address": "123 Main Street, Cityville"
    },
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "school": "University of Tech",
        "graduationYear": 2020
      },
      {
        "degree": "High School Diploma",
        "school": "City High School",
        "graduationYear": 2016
      }
    ],
    // ... (rest of the resume properties)
  
    // Sample function to log the information
    logInfo: function(section, data) {
      console.log(`**${section.toUpperCase()}**`);
      if (Array.isArray(data)) {
        data.forEach(item => console.log(item));
      } else if (typeof data === 'object') {
        for (const key in data) {
          console.log(`${key}: ${data[key]}`);
        }
      }
      console.log('\n');
    }
  };
  
  // Using for...in loop for the entire resume
  for (const section in resume) {
    if (typeof resume[section] === 'function') continue;
    resume.logInfo(section, resume[section]);
  }
  
  // Using forEach for the education section
  resume.logInfo('education', resume.education);
  
  // Using for loop for the skills section
  for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
  }
  
  // Using for...of loop for the languages section
  for (const language of resume.languages) {
    console.log(language);
  }
  