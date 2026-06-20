export interface ModalState {
  explore: boolean;
  booking: boolean;
  download: boolean;
  community: boolean;
  contact: boolean;
}

export interface FormData {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  role: string;
  teamSize: string;
  trainingFrequency: string;
  challenges: string;
  date: string;
  time: string;
  timezone: string;
}

export type DownloadResource = {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
};
