import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import style from './style.module.css';

type CommentProps = {
  id: number,
  content: string,
  onRemoveComment: (id: number) => void
}

export function Comment({ id, content, onRemoveComment }: CommentProps) {
  const [applauseCount, setApplauseCount] = useState(0)

  function handleRemoveCommentById() {
    onRemoveComment(id)
  }

  function handleAddNewApplause() {
    setApplauseCount((state) => state + 1)
  }

  return (
    <div className={style.comment}>
      <Avatar src="https://github.com/willian-moreno.png" />

      <div className={style.comment__box}>
        <div className={style.comment__box__content}>
          <header className={style.comment__box__content__profile}>
            <div className={style.comment__box__content__profile__authorAndTime}>
              <strong>Willian Moreno</strong>
              <time
                title="01 de janeiro às 11:40"
                dateTime="2024-01-01 11:40:00"
              >Cerca de 2h atrás</time>
            </div>
            <button
              className={style.comment__box__content__profile__deleteComment}
              title="Deletar comentário"
              onClick={handleRemoveCommentById}
            >
              <Trash size={24} />
            </button>
          </header>
          <p className={style.comment__box__content__comment}>
            {content}
          </p>
        </div>
        <footer className={style.comment__box__footer}>
          <button
            className={style.comment__box__footer__button}
            onClick={handleAddNewApplause}
          >
            <ThumbsUp size={20} />
            Aplaudir <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}