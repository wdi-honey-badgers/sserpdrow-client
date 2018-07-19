'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

const onCreatePosts = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPosts(data)
    .then(ui.addPostsSuccess)
    .then(onGetPosts)
    .catch(ui.postError)
}

const onGetPosts = function () {
  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.postError)
}

const onUpdatePosts = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updatePosts(data, id)
    .then(ui.updatePostsSuccess)
    .then(onGetPosts)
    .catch(ui.postError)
}

const onDeletePosts = function () {
  event.preventDefault()
  const data = $(event.target).data('id')
  api.deletePosts(data)
    .then(ui.deletePostsSuccess(data))
    .then(onGetPosts)
    .catch(ui.postError)
}

module.exports = {
  onCreatePosts,
  onGetPosts,
  onUpdatePosts,
  onDeletePosts
}
