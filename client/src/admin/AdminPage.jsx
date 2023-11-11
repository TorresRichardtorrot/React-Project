import { useAuth } from '../hook/auth'
function AdminPage () {
  const { logout, user } = useAuth()
  console.log(user)
  return (
        <>
            <aside>
                <div>

                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </aside>
            <main>
                <h1>hola admin</h1>
                <button onClick={() => {
                  logout()
                }}>Chao</button>
            </main>
        </>
  )
}

export default AdminPage
