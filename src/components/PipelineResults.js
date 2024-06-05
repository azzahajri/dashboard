import React, { useState, useEffect } from 'react';
// import { fetchPipelineResults } from '../api';
const PipelineResults = () => {
  const [pipelineResults, setPipelineResults] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchPipelineResults();
  //       setPipelineResults(data);
  //     } catch (error) {
  //       // Handle error
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Function to handle clicking on buttons
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="table-container">
      <style>
        {`
          .table-container {
            display: flex;
            justify-content: center;
            margin-top: 50px;
          }

          .table {
            width: 80%;
            border-collapse: collapse;
            text-align: center;
          }

          .table-bordered th,
          .table-bordered td {
            border: 1px solid #ddd;
            padding: 8px;
          }

          .table-bordered th {
            background-color: #f2f2f2;
          }
        `}
      </style>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Github</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleButtonClick('https://github.com/azzahajri/backend.git')}
              >
                Backend
              </button>
              <button
                className="btn btn-primary ms-2"
                onClick={() => handleButtonClick('https://github.com/azzahajri/selectila_front.git')}
              >
                Frontend
              </button>
            </td>
          </tr>
          <tr>
            <td>Pipeline Results</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleButtonClick('http://localhost:8080/job/SelectIlLa_Backend/')}
              >
                Backend
              </button>
              <button
                className="btn btn-primary ms-2"
                onClick={() => handleButtonClick('http://localhost:8080/job/SelectItLa_Front/')}
              >
                Frontend
              </button>
            </td>
          </tr>
          <tr>
            <td>SonarQube</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleButtonClick('http://localhost:9000/dashboard?id=SelectIlLa_Backend')}
              >
                Backend
              </button>
              <button
                className="btn btn-primary ms-2"
                onClick={() => handleButtonClick('http://localhost:9000/dashboard?id=SelectIlLa_Front')}
              >
                Frontend
              </button>
            </td>
          </tr>
          <tr>
            <td>Grafana</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleButtonClick('http://localhost:3000/d/edk7tqi37h3pcd/jenkins-monitoring?orgId=1')}
              >
                Grafana
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PipelineResults;
