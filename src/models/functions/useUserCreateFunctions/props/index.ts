export interface useUserCreateFunctionsProps {
  createPost: (data: any, userId: string) => Promise<void>;
}
