'use strict'

const store = require('./store')

// Assistant Functions
const clearMessageDiv = function () {
  $('#userFacingAuthMsg').html('')
  $('#userFacingPostMsg').html('')
}

// The terms "external" and "internal" are references to visitor view vs user signed-in view. Someone who is not signed in will see the "external" view state, where as user who are signed-in will see the "internal" view state.
const revealChangePassSignOut = function () {
  const authInternal = document.getElementById('authInternal')
  authInternal.classList.remove('hidden')
}

const revealSignUpSignIn = function () {
  const userAuthExternal = document.getElementById('authExternal')
  userAuthExternal.classList.remove('hidden')
}

const hideChangePassSignOut = function () {
  const authInternal = document.getElementById('authInternal')
  authInternal.classList.add('hidden')
}

const hideSignUpSignIn = function () {
  const authExternal = document.getElementById('authExternal')
  authExternal.classList.add('hidden')
}

const clearFormFields = function () {
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-pw-form').reset()
  document.getElementById('create-post').reset()
  document.getElementById('update-post').reset()
}

// Auth Success
const signUpSuccess = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('You now have an account. Please sign in.')
  clearFormFields()
  console.log('sign up success')
}

const signInSuccess = function (data) {
  clearMessageDiv()
  store.user = data.user
  $('#userFacingAuthMsg').append('You have signed in.')
  clearFormFields()
  revealChangePassSignOut()
  hideSignUpSignIn()
  console.log('log in success')
}

const changePasswordSuccess = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('Password changed, now dont forget it!')
  clearFormFields()
  console.log('change password success')
}

const signOutSuccess = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('Bye. Come again!')
  clearFormFields()
  hideChangePassSignOut()
  revealSignUpSignIn()
  delete store.user
  console.log('successfully left me')
}

// Auth Error
const authError = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('Auth related error!')
  clearFormFields()
  console.log('errored!')
}

// Post Success
const addPostsSuccess = function (data) {
  clearMessageDiv()
  $('#userFacingPostMsg').append('Sweet, you just created a post!')
  clearFormFields()
  console.log('Post successfully created!\n', data)
}

const getPostsSuccess = (data) => {
  clearMessageDiv()
  $('#userFacingPostMsg').append('All of your posts have been retrieved.')
  clearFormFields()
  store.post = data.posts
}

const updatePostsSuccess = function (data) {
  clearMessageDiv()
  $('#userFacingPostMsg').append('Alright, you just updated your post.')
  clearFormFields()
  console.log('post updated!\n', data)
}

const deletePostsSuccess = function () {
  clearMessageDiv()
  $('#userFacingPostMsg').append('Done. You just deleted that post. Unfortunately if you want it back you will have to recreate it.')
  clearFormFields()
  console.log('Post destroyed; oh the humanity!')
}

// Post Error
const postError = function () {
  clearMessageDiv()
  $('#userFacingPostMsg').append('Post related error!')
  clearFormFields()
  console.log('Post errored out!')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  authError,
  addPostsSuccess,
  getPostsSuccess,
  updatePostsSuccess,
  deletePostsSuccess,
  postError
}
