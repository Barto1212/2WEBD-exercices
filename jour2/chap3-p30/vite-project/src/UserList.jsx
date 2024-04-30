const users = [
  {
    id: 1,
    name: "pierre",
    age: 20,
  },
  {
    id: 2,
    name: "jonhy",
    age: 22,
  },
  {
    id: 3,
    name: "bill",
    age: 17,
  },
  {
    id: 4,
    name: "polo",
    age: 1,
  },
]

export const UserList = () =>
  users.map((user) => <UserItem key={user.id} user={user} />)

const UserItem = ({ user }) => (
  <li>{`${user.name} (${user.age} an${user.age > 1 ? "s" : ""})`}</li>
)
