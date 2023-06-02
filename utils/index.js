export const checkImageURL = (image) => {
  if (image === null) return false
  else {
    const pattern = new RegExp(
      '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
      'i'
    )
    return pattern.test(image.url)
  }
}

export const convertSecondsToHours = (seconds) => {
  let minutes = seconds / 60
  let hours = Math.floor(minutes / 60)
  minutes = minutes - (hours * 60)

  return `${hours}h${minutes}min`
}
