'use strict'

const authEvents = require('./auth-events.js')
// const events = require('./events.js')

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
  // $('#add-cookie-form').on('submit', events.onAddCookies)
  // $('body').on('click', '.edit-button', events.onEditButton)
  // $('body').on('click', '.delete-button', events.onDeleteButton)
  // $('body').on('submit', '#edit-cookies-form', events.onEditCookies)
  // $('body').on('submit', '#delete-cookies', events.onDeleteCookies)
})
