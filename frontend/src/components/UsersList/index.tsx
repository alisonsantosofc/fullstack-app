import { User } from '../../@types/User.ts';

interface UsersListProps {
  users: User[];
}

export function UsersList({ users }: UsersListProps) {
  return (
    <main className="w-screen h-[calc(100vh-3rem)] flex justify-center pt-20 px-4 lg:px-0">
      <section className="w-[998px] h-full text-zinc-300">
        <h2 className="pt-4 pb-8 text-[24px] font-medium">Users list</h2>

        <ul className="grid grid-cols-1 gap-8 pb-8 lg:grid-cols-2">
          {users?.map((user) => (
            <li key={user.id} className="flex justify-between items-center rounded bg-zinc-750 shadow-lg py-4 px-8">
              <div>
                <p className="block text-[20px] pb-2">
                  {user.name}
                </p>

                <div className="flex w-full gap-2 pb-6">
                  <span className="block bg-zinc-600 px-4 py-1 text-sm">{user.city}</span>
                  <span className="block bg-zinc-700 px-4 py-1 text-sm">{user.country}</span>
                </div>
              </div>

              <span className="text-2xl text-zinc-500 font-medium">{user.favorite_sport}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
