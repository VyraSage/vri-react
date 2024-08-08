// src/services/api.js

import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'https://vri-copilot-api-lucz5.ondigitalocean.app/vyrasage_copilot';
const FEEDBACK_API_URL = import.meta.env.VITE_FEEDBACK_API_URL; // Load feedback API URL from .env

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postUserQuestion = async (question) => {
  try {
    const response = await apiService.post('', { natural_language_question: question });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(FEEDBACK_API_URL, feedbackData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
