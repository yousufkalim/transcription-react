import React from 'react';
import ProgressSection from './ProgressSection';

function GraphsHome() {
  return (
    <>
      <h5>Analytics</h5>
      <div className="graph">
        <div className="compo-gap">
          <div className="titles">
            <p>Confidence</p>
          </div>

          <div>
            <ProgressSection />
          </div>
        </div>
        <div className="graph-gap">
          <div className="titles">
            <p>Duration</p>
          </div>
          <div className="cgraph">
            <p>3:00 min</p>
          </div>
        </div>
        <div className="graph-gap">
          <div className="titles">
            <p>Words </p>
          </div>
          <div className="cgraph">
            <p>880</p>
          </div>
        </div>
        <div className="graph-gap">
          <div className="titles">
            <p>Sentence</p>
          </div>
          <div className="cgraph">
            <p>20</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphsHome;
