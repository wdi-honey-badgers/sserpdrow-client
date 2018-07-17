'use strict'

const store = require('./store')
// const showCookiesTemplate = require('./templates/baker-posts.handlebars')

let signedIn = false

const signUpSuccess = function (signUpSuccess) {
  console.log('sing up success')
  formResets()
  // clearText()
  $('#info').append('You now have an account. Please sign in.')
}

const signInSuccess = function (data) {
  console.log('log in success')
  store.user = data.user
  formResets()
  // clearText()
  signedIn = true
  // $('.pre-sign-in').hide()
  // $('.signed-in').show()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  console.log('change password success')
  formResets()
  // clearText()
  // $('#info').append('Password changed.')
}

const signOutSuccess = function (signOutSuccess) {
  console.log('successfully left me')
  formResets()
  // clearText()
  signedIn = false
  // $('#info').append('Bye. Come again!')
  // $('.signed-in').hide()
  // $('.pre-sign-in').show()
}
//
// const addPostsSuccess = function (data) {
//   formResets()
  // clearText()
//   $('#info').append('Noted!')
// }
//
// const getPostsSuccess = (data) => {
//   postTable(data)
//   formResets()
  // clearText()
//   store.post = data.posts
// }
//
// const postTable = function (data) {
//   $('td').remove()
//   const showPostsHtml = showPostsTemplate({ posts: data.posts })
//   $('thead').append(showPostsHtml)
// }
//
// const editPostsSuccess = function (data) {
//   formResets()
  // clearText()
//   $('#edit-posts').hide()
//   $('#delete-posts').hide()
//   $('#info').append('Noted!')
// }
//
// const deletePostsSuccess = function (data) {
//   $('#edit-posts').hide()
//   $('#delete-posts').hide()
//   formResets()
  // clearText()
//   $('#info').append('Noted!')
// }

const error = function () {
  console.log('errored!')
  // clearText()
  formResets()
  $('#info').append('Error! Try again.')
}

const formResets = function () {
  if (signedIn === true) {
    document.getElementById('edit-posts-form').reset()
    // document.getElementById('change-pw-form').reset()
    // document.getElementById('add-post-form').reset()
    // document.getElementById('delete-posts-form').reset()
  } else {
    document.getElementById('sign-in-form').reset()
    document.getElementById('sign-up-form').reset()
  }
}

// const clearText = function () {
//   document.getElementById('info').textContent = ''
// }

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  // addPostsSuccess,
  // getPostsSuccess,
  // editPostsSuccess,
  // deletePostsSuccess,
  error
}
