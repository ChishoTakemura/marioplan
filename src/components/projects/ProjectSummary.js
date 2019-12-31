import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div>
      <div className='card z-depth-0 project-summery'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{project.title}</span>
          <p>{project.content}</p>
          <p className='grey-text'>{project.id}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
