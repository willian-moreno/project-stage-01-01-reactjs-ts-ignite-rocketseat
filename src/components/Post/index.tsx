import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Author, Content } from '../../app.types';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import style from './style.module.css';

type PostProps = {
  author: Author,
  publishedAt: Date,
  content: Content[]
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([{ id: 1, content: 'Muito bom, parabéns!! 👏👏' }])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  const isNewCommentEmpty = newCommentText.length === 0

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setComments([{ id: comments.length + 1, content: newCommentText }, ...comments])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function removeComment(id: number) {
    const filteredComments = comments.filter(comment => comment.id !== id)
    setComments([...filteredComments])
  }

  return (
    <article className={style.post}>
      <header className={style.post__header}>
        <div className={style.post__header__author}>
          <Avatar
            src={author.avatarUrl}
            variant="outlined"
          />
          <div className={style.post__header__author__details}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={format(publishedAt, "yyyy-MM-dd HH:mm:ss")}
          className={style.post__header__author__publishedAt}
        >{publishedDateRelativeToNow}</time>
      </header>
      <div className={style.post__content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }

          if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form
        className={style.post__commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          className={style.post__commentForm__commentArea}
          required
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
        />
        <footer className={style.post__commentForm__footer}>
          <button
            type="submit"
            className={style.post__commentForm__footer__submit}
            disabled={isNewCommentEmpty}
          >Publicar</button>
        </footer>
      </form>

      <div className={style.post__comments}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              content={comment.content}
              onRemoveComment={removeComment}
            />
          )
        })}
      </div>
    </article>
  );
}
