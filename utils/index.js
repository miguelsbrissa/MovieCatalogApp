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
  