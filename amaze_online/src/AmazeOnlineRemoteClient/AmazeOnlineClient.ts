import axios from 'axios';

export const AmazeClient  = axios.create({
    baseURL: "https://aff627tmyf.execute-api.us-east-1.amazonaws.com/dev",
    headers: {
        'Content-Type': 'application/json'
        
    }
    
})