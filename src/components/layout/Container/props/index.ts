export interface ContainerProps {
    as?: 'header' | 'nav' | 'main' | 'aside' | 'footer';
    children: React.ReactNode;
    id: string;
}