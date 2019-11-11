interface ServiceInit {
    status: 'init';
}

interface ServiceLoading {
  status: 'loading';
}

interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}

interface ServiceError {
  status: 'error';
  error: Error;
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;

export interface Data {
  name: string;
  crew: string;
  passengers: string;
  cost_in_credits?: string;
  url: string;
}
