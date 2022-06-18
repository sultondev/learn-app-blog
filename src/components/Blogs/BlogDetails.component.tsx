import React from 'react';
const ProjectDetails = () => {
  return (
    <div>
      <h4>Project Details</h4>
    </div>
  );
}

const MemoProjectDetails = React.memo(ProjectDetails);

export default MemoProjectDetails;