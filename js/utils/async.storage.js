import { AsyncStorage } from 'react-native'

export function checkUserCreds(creds) {
  return new Promise((res) => {
    AsyncStorage.getItem('users')
      .then((storedUsers) => {
        const users = storedUsers ? JSON.parse(storedUsers) : {}
        const { username, password } = creds
        console.log(users[username], !!users[username])
        const success = !!users[username] && users[username].password === password
        res({ success })
      })
      .catch((err) => {
        console.error(err)
        res({ success: false, error: true })
      })
  })
}

export function saveUserCreds(creds) {
  return new Promise((res, rej) => {
    AsyncStorage.getItem('users')
      .then((storedUsers) => {
        const users = storedUsers ? JSON.parse(storedUsers) : {}
        if (!users[creds.username]) {
          AsyncStorage.setItem(
            'users',
            JSON.stringify({ ...users, [creds.username]: { password: creds.password } }),
          )
            .then(() => res({ success: true }))
            .catch(e => rej(e))
        } else {
          res({ error: 'user_already_exist' })
        }
      })
      .catch(e => rej(e))
  })
}
