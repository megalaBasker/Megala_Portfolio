import React from 'react';

function Projects() {
    const projects = [
        {
          name: 'Sentiment Analysis on Clothing Reviews',
          description: 'A project that performs sentiment analysis on customer reviews of clothing to determine customer satisfaction and preferences.',
        },
        {
          name: 'Student Management System',
          description: 'A Java-based system for managing student records, including course registration, grade tracking, and report generation.',
        },
        {
          name: 'Bank Management System',
          description: 'A console-based application that allows customers to manage their bank accounts, view transaction history, and perform account-related actions.',
        },
      ];
      

  return (
    <section
      id="projects"
      style={{
        padding: '40px',
        backgroundColor: '#add8e6', 
        color: 'black',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', borderBottom: '2px solid #facc15', paddingBottom: '10px' }}>
          My Projects
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
          Here are some of the projects I have worked on:
        </p>

        <div style={{ marginTop: '20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#fff', 
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h3 style={{ fontSize: '1.5rem', color: '#1e3a8a', marginBottom: '10px' }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: '1rem', marginBottom: '10px' }}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
