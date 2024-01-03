import { ImgHTMLAttributes } from 'react'
import style from './style.module.css'

type AvatarProp = {
  src: string
  alt?: string,
  variant?: 'initial' | 'outlined'
  className?: string,
} & ImgHTMLAttributes<HTMLImageElement>

export function Avatar({ variant, className, ...imgProps }: AvatarProp) {
  const classes = [
    style.avatar,
    className
  ].join(' ').replaceAll(/\s+/g, ' ').trim()

  return (
    <img
      {...imgProps}
      className={classes}
      data-variant={variant}
    />
  )
}