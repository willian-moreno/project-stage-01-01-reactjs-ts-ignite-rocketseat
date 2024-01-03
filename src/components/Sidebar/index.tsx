import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import style from './style.module.css';

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <div
        className={style.sidebar__cover}
        role="img"
      />

      <div className={style.sidebar__profile}>
        <Avatar
          src="https://github.com/willian-moreno.png"
          variant="outlined"
          className={style.sidebar__profile__avatar}
        />
        <strong>Willian Moreno</strong>
        <span>Web Developer</span>
      </div>

      <footer className={style.sidebar__footer}>
        <a
          className={style.sidebar__footer__link}
          href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
