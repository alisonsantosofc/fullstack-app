export type User = {
  id: string;
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
};

export type UserDTO = Omit<User, 'id'>;