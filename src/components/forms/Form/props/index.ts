export interface FormProps {
  children: React.ReactNode;
  id: string;
  onSubmit: (data: any) => Promise<void>;
  successTitle: string;
  successDescription: string;
  errorTitle: string;
  errorDescription: string;
}
