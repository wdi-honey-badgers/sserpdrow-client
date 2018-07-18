'use strict'

const authEvents = require('./auth-events.js')
const events = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.visitors').show()
  $('.users').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('body').on('click', '.delete-button', events.onDeleteButton)
  $('body').on('submit', '#delete-posts', events.onDeletePosts)
  $('#create-post').on('submit', events.onCreatePosts)
  $('#update-post').on('submit', events.onUpdatePosts)
})
