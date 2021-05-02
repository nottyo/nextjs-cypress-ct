import styles from './posts.module.css'
import { locators } from './posts.locators'

export default function Posts(props) {
  const { posts, users } = props
  const postsSection = posts.map((post) => {
    const user = users.find((user) => post.userId === user.id)
    return (
      <div key={post.id}>
        <h2 data-testid={locators.title}>{post.title}</h2>
        <p className={styles.userName} data-testid={locators.userName}>By: <span>{user.name}</span></p>
        <p data-testid={locators.body}>{post.body}</p>
      </div>
    )
  })
  return (
    <div>
      {postsSection}
    </div>
  )
}