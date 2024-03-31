export function setTokenLocalStorage(token: string) {
  localStorage.setItem('access_token', JSON.stringify(token))
}
