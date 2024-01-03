import style from './style.module.css'

type AvatarProp = {
  src: string
  alt?: string,
  variant?: 'initial' | 'outlined'
  className?: string,
}

export function Avatar({ src, alt, variant, className }: AvatarProp) {
  const classes = [
    style.avatar,
    className
  ].join(' ').replaceAll(/\s+/g, ' ').trim()

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      data-variant={variant}
    />
  )
}