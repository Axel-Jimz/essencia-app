export const generateId = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  for (let i = 0; i < 30; i++) {
    const index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }

  return id;
}