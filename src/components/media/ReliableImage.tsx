import { useEffect, useState, type ImgHTMLAttributes, type SyntheticEvent } from 'react'
import heroFallback from '../../assets/hero.png'

type ReliableImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

export function ReliableImage({
  src,
  fallbackSrc = heroFallback,
  onError,
  ...props
}: ReliableImageProps) {
  const primarySrc = src || fallbackSrc
  const [currentSrc, setCurrentSrc] = useState(primarySrc)

  useEffect(() => {
    setCurrentSrc(primarySrc)
  }, [primarySrc])

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    }

    onError?.(event)
  }

  return <img {...props} src={currentSrc} onError={handleError} />
}
