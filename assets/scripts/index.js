'use strict'

const authEvents = require('./auth-events.js')
const events = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('body').on('submit', '#delete-posts', events.onDeletePosts)
  $('#create-post').on('submit', events.onCreatePosts)
  $('#update-post').on('submit', events.onUpdatePosts)
  $('#get-posts').on('click', events.onGetPosts)
  $('.view-posts').on('click', '.delete-button', events.onDeletePosts)
})
