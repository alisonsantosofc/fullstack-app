export type User = {
  id: string;
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
  created_at: Date;
};

export type UserDTO = Omit<User, 'id' | 'created_at'>;
