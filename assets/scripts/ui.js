'use strict'

const store = require('./store')
const showPostsTemplate = require('./templates/posts-view.handlebars')

// Assistant Functions
const clearMessageDiv = function () {
  $('#userFacingMsg').html('')
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
}

// Success & Error Functions
const signUpSuccess = function (signUpSuccess) {
  clearMessageDiv()
  $('#userFacingMsg').append('You now have an account. Please sign in.')
  clearFormFields()
  console.log('sign up success')
}

const signInSuccess = function (data) {
  clearMessageDiv()
  store.user = data.user
  $('#userFacingMsg').append('You have signed in.')
  clearFormFields()
  revealChangePassSignOut()
  hideSignUpSignIn()
  console.log('log in success')
}

const changePasswordSuccess = function (changePasswordSuccess) {
  clearMessageDiv()
  $('#userFacingMsg').append('Password changed, now dont forget it!')
  clearFormFields()
  console.log('change password success')
}

const signOutSuccess = function (signOutSuccess) {
  clearMessageDiv()
  $('#userFacingMsg').append('Bye. Come again!')
  clearFormFields()
  hideChangePassSignOut()
  revealSignUpSignIn()
  delete store.user
  console.log('successfully left me')
}

const addPostsSuccess = function (data) {
  console.log('Post successfully created!\n', data)
  // formResets()
  // clearText()
//   $('#info').append('Noted!')
}

const getPostsSuccess = (data) => {
  console.log('got all posts!\n', data)
  const showPostsHtml = showPostsTemplate({object: data})
  $('.view-posts').empty()
  $('.view-posts').append(showPostsHtml)
}

// const postTable = function (data) {
//   $('td').remove()
//   const showPostsHtml = showPostsTemplate({ posts: data.posts })
//   $('thead').append(showPostsHtml)
// }
//
const updatePostsSuccess = function (data) {
  console.log('post updated!\n', data)
  // formResets()
  // clearText()
//   $('#edit-posts').hide()
//   $('#delete-posts').hide()
//   $('#userFacingMsg').append('Noted!')
}
//
const deletePostsSuccess = function (data) {
  console.log('post successfully deleted')
}

const error = function () {
  clearMessageDiv()
  $('#userFacingMsg').append('Error! Try again.')
  clearFormFields()
  console.log('errored!')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  addPostsSuccess,
  getPostsSuccess,
  updatePostsSuccess,
  deletePostsSuccess,
  error
}
