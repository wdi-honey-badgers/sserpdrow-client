'use strict'

const authApi = require('./api.js')
const authUi = require('./ui.js')
// const events = require('./events.js')
const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('you pushed a button!')
  const data = getFormFields(event.target)
  console.log('Lt. Commander Data is ', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.error)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('you pushed a different button!')
  const data = getFormFields(event.target)
  console.log('Lt. Commander Data is ', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    // .then(events.onGetCookies)
    .catch(authUi.error)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('you pushed the password button!')
  const data = getFormFields(event.target)
  console.log('Lt. Commander Data is ', data)
//   authApi.changePassword(data)
//     .then(authUi.changePasswordSuccess)
//     .catch(authUi.error)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log("nooooo don't leave meeeee :'(")
//   authApi.signOut()
//     .then(authUi.signOutSuccess)
//     .catch(authUi.error)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
