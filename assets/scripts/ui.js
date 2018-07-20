'use strict'

const store = require('./store')
const showPostsTemplate = require('./templates/posts-view.handlebars')

let signedIn = false
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

const revealCreatePost = function () {
  const createPost = document.getElementById('create-post-wrapper')
  createPost.classList.remove('hidden')
}

const hideChangePassSignOut = function () {
  const authInternal = document.getElementById('authInternal')
  authInternal.classList.add('hidden')
}

const hideSignUpSignIn = function () {
  const authExternal = document.getElementById('authExternal')
  authExternal.classList.add('hidden')
}

const hideCreatePost = function () {
  const createPost = document.getElementById('create-post-wrapper')
  createPost.classList.add('hidden')
}

const clearFormFields = function () {
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-pw-form').reset()
  document.getElementById('create-post').reset()
}

// Auth Success
const signUpSuccess = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('You now have an account. Please sign in.')
  clearFormFields()
}

const signInSuccess = function (data) {
  clearMessageDiv()
  store.user = data.user
  clearFormFields()
  revealChangePassSignOut()
  revealCreatePost()
  hideSignUpSignIn()
  signedIn = true
}

const changePasswordSuccess = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('Password changed, now dont forget it!')
  clearFormFields()
}

const signOutSuccess = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('Bye. Come again!')
  clearFormFields()
  hideChangePassSignOut()
  hideCreatePost()
  revealSignUpSignIn()
  delete store.user
  signedIn = false
}

const authError = function () {
  clearMessageDiv()
  $('#userFacingAuthMsg').append('Auth related error!')
  clearFormFields()
}

// Post Success
const addPostsSuccess = function (data) {
  clearMessageDiv()
  clearFormFields()
}

const getPostsSuccess = (data) => {
  store.post = data.posts
  const showPostsHtml = showPostsTemplate({object: data})
  $('.view-posts').empty()
  $('.view-posts').append(showPostsHtml)
  if (signedIn === false) {
    $('.update-button').hide()
    $('.delete-button').hide()
  } else {
    $('.update-button').hide()
    $('.delete-button').hide()
    $('.' + store.user._id).show()
  }
  clearMessageDiv()
  clearFormFields()
}

const updatePostsSuccess = function (data) {
  clearMessageDiv()
  $('.update-post').modal('hide')
  store.post = data.posts
  const showPostsHtml = showPostsTemplate({object: data})
  $('.view-posts').empty()
  $('.view-posts').append(showPostsHtml)
  if (signedIn === false) {
    $('.update-button').hide()
    $('.delete-button').hide()
  } else {
    $('.update-button').hide()
    $('.delete-button').hide()
    $('.' + store.user._id).show()
  }
  $('#userFacingPostMsg').append('You updated a post!')
  clearFormFields()
}

const deletePostsSuccess = function (data) {
  $('.delete-post').modal('hide')
  clearMessageDiv()
  clearFormFields()
}

const postError = function () {
  clearMessageDiv()
  $('.update-post').modal('hide')
  $('#userFacingPostMsg').append('Post related error!')
  clearFormFields()
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
