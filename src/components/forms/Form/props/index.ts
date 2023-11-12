export interface FormProps {
    children: React.ReactNode;
    id: string;
    onSubmit: (data: any) => Promise<void>;
  }
  