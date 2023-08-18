import { useUsers } from '../../hooks/useUsers.tsx';

export function UsersList() {
  const { users } = useUsers();
  return (
    <main className="w-screen h-[calc(100vh-3rem)] flex justify-center pt-20">
      <section className="w-[998px] h-full text-zinc-300">
        <h2 className="pt-4 pb-8 text-[24px] font-medium">Users list</h2>

        <ul className="grid grid-cols-3 gap-8">
          {users.map((user) => (
            <li className="rounded bg-zinc-750 shadow-lg py-4 px-8">
              <strong className="block text-[18px] font-medium pb-2">
                {user.name}
              </strong>

              <div className="flex w-full gap-2 pb-6">
                <span className="block bg-zinc-600 px-4 py-1 text-sm">{user.city}</span>
                <span className="block bg-zinc-700 px-4 py-1 text-sm">{user.country}</span>
              </div>

              <p className="w-full flex justify-end text-2xl">
                {user.favorite_sport}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
