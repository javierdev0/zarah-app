export const isHTML = (paragraph?: string): boolean => {
  if (!paragraph) {
    return false
  }

  const regex = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi

  if (!regex.test(paragraph)) {
    return false
  }

  try {
    const parser = new DOMParser()
    const htmlDoc = parser.parseFromString(paragraph, 'text/html')

    if (htmlDoc.body.childNodes.length === 0) {
      return false
    }

    return true
  } catch (error) {
    return false
  }
}
