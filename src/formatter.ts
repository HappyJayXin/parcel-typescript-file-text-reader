interface downloadFileFormatter<T> {
  (filename: string, content: string): T
}

interface readFileFormatter<T> {
  (event: any | HTMLInputElement): T
}

interface getContentFormatter<T> {
  (): T
}

interface setContentFormatter<T> {
  (text: string): T
}

interface showAndHideFormatter<T> {
  (element: HTMLElement): T
}

export { downloadFileFormatter, readFileFormatter, getContentFormatter, setContentFormatter, showAndHideFormatter };
