export interface LoginRequest {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    username: string;
    email: string;
    userId: number;
  }
  
  export interface User {
    id: number;
    username: string;
    email: string;
  }
  