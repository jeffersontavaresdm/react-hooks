import React from "react";

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string
}

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

/**
 * O useEffect do React é usado para fazer algo quando um outro algo mudar. Por exemplo:
 * Quero buscar de uma api um dado quando um state mudar. Ou, quero fazer um cálculo X quando uma variavel for alterada.
 */
const UseEffectHook = () => {
  const [resource, setResource] = React.useState<string>("React Hooks App!")
  const [posts, setPosts] = React.useState<Post[]>([])
  const [comments, setComments] = React.useState<Comment[]>([])
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [users, setUsers] = React.useState<User[]>([])

  function changeResourceType(resource: string) {
    setPosts([])
    setComments([])
    setTodos([])
    setUsers([])
    setResource(resource)
  }

  React.useEffect(() => {
    // componentDidMount
    console.log("componentDidMount")

    return () => {
      // componentWillAmount
      console.log("componentWillUnmount")
    }
  }, [])

  React.useEffect(() => {
    if (resource != "React Hooks App!") {
      (() => {
        let url = `https://jsonplaceholder.typicode.com/${ resource }`
        let headers = { method: "get", headers: { 'Content-Type': 'application/json' } }

        return fetch(url, headers)
          .then(response => response.json())
          .then(response => {
            switch (resource) {
              case "posts":
                setPosts(response as Post[])
                break
              case "comments":
                setComments(response as Comment[])
                break
              case "todos":
                setTodos(response as Todo[])
                break
              case "users":
                setUsers(response as User[])
                break
            }
          })
      })()
    }
  }, [resource])

  return (
    <>
      <h1 >{ resource }</h1 >
      <div >
        <button onClick={ () => changeResourceType("posts") } >Posts</button >
        <button onClick={ () => changeResourceType("comments") } >Comments</button >
        <button onClick={ () => changeResourceType("todos") } >Todos</button >
        <button onClick={ () => changeResourceType("users") } >Users</button >
      </div >
      {
        posts.length != 0
          ? <>
            <ul >
              {
                posts.map(post => <li key={ post.id } >{ `${ post.userId } - ${ post.title }` }</li >)
              }
            </ul >
          </>
          : <></>
      }
      {
        comments.length != 0
          ? <>
            <ul >
              { comments.map(comments => <li
                key={ comments.id } >{ `${ comments.postId } - ${ comments.email }` }</li >) }
            </ul >
          </>
          : <></>
      }
      {
        todos.length != 0
          ? <>
            <ul >
              { todos.map(todo => <li key={ todo.id } >{ `${ todo.title } - ${ todo.completed }` }</li >) }
            </ul >
          </>
          : <></>
      }
      {
        users.length != 0
          ? <>
            <ul >
              { users.map(user => <li key={ user.id } >{ `${ user.username } - ${ user.email }` }</li >) }
            </ul >
          </>
          : <></>
      }
    </>
  )
}

export default UseEffectHook;