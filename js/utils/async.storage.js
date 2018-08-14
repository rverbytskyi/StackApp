import { AsyncStorage } from 'react-native'

export function checkUserCreds(creds) {
  return new Promise((res) => {
    AsyncStorage.getItem('users')
      .then((users) => {
        const { username, password } = creds
        const success = !!users[username] && users[username].password === password
        res({ success })
      })
      .catch((err) => {
        console.error(err)
        res({ success: false, error: true })
      })
  })
}
