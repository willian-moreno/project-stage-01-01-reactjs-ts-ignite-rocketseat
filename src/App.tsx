import './global.css';

import style from './App.module.css';
import { Author, Content } from './app.types';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { postsData } from './db';

type Posts = {
  id: number,
  author: Author,
  content: Content[],
  publishedAt: Date
}

const posts = postsData as Posts[]

export function App() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <main>
          <section className={style.posts}>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </section>
        </main>
      </div>
    </>
  );
}
