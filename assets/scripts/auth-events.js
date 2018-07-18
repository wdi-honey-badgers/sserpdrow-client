'use strict'

const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api.js')
const authUi = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('you pushed a button!')
  const data = getFormFields(event.target)
  console.log('Lt. Commander Data is ', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.authError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('you pushed a different button!')
  const data = getFormFields(event.target)
  console.log('Lt. Commander Data is ', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.authError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('you pushed the password button!')
  const data = getFormFields(event.target)
  console.log('Lt. Commander Data is ', data)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.authError)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Where do you think you are going bub -_-*')
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.authError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
