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
    .then(api.getPosts)
    .then(ui.updatePostsSuccess)
    .catch(ui.postError)
}

const onDeletePosts = function (event) {
  event.preventDefault()
  const data = $(event.target).data('id')
  api.deletePosts(data)
    .then(ui.deletePostsSuccess)
    .then(onGetPosts)
    .catch(ui.postError)
}

const OnShowPost = (event) => {
  console.log('post clicked')
  event.preventDefault()
  const data = $(event.target).data('id')
  console.log('is is:\n', data)
  ui.showPost(data)
}

module.exports = {
  onCreatePosts,
  onGetPosts,
  onUpdatePosts,
  onDeletePosts,
  OnShowPost
}
