// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/job/SelectIlLa_Backend'; //  backend API URL

const API_URL2 = 'https://github.com/azzahajri/selectila_front.git/'; //  backend API URL

const API_URL3 = 'http://localhost:8080/job/SelectIlLa_Backend/'; //  backend API URL


const API_URL4 = 'http://localhost:8080/job/SelectItLa_Front/'; //  backend API URL

const API_URL5 = 'http://localhost:9000/dashboard?id=SelectIlLa_Backend'; //  backend API URL

const API_URL6 = 'http://localhost:9000/dashboard?id=SelectIlLa_Front'; //  backend API URL

const API_URL7 = 'http://localhost:3000/d/edk7tqi37h3pcd/jenkins-monitoring?orgId=1'; //  backend API URL

export const fetchPipelineResults = async () => {
  try {
    const response = await axios.get(`${API_URL}/pipelines`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pipeline results:', error);
    throw error;
  }
};
