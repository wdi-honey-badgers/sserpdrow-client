'use strict'

const authEvents = require('./auth-events.js')
const events = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.onGetPosts()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-post').on('submit', events.onCreatePosts)
  $('.view-posts').on('submit', '.update-post-form', events.onUpdatePosts)
  // $('#get-posts').on('click', events.onGetPosts)
  $('.view-posts').on('submit', '.destroy-post-form', events.onDeletePosts)
  // $('.view-posts').on('click', '.post-card', events.OnShowPost)
})
