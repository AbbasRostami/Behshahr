export interface LoginValues {
  phoneOrGmail: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  data: {
    success: boolean;
    token: string;
    message: string;
  };
}

export interface RegisterStepOneValues {
  gmail: string;
}

export interface RegisterStepTwoValues {
  phoneNumber: string;
  verifyCode: string;
}

export interface RegisterStepThreeValues {
  password: string;
  gmail: string;
  phoneNumber: string;
}

export interface ResetPasswordValues {
  newPassword: string;
  confirmPassword: string;
}

export interface ApiErrorResponse {
  status: number;
  response?: {
    data?: {
      ErrorMessage?: string[];
    };
  };
}

export interface ResetApiResponse {
  success: boolean;
  id?: string;
  message?: string;
  response?: {
    data?: {
      ErrorMessage?: string[];
    };
  };
}

export interface GeneralApiResponse<T = unknown> {
  data?: T;
  status?: number;
  success?: boolean;
  message?: string;
  response?: {
    data?: {
      ErrorMessage?: string[];
    };
  };
}
