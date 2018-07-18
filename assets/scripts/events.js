'use strict'

const authApi = require('./api.js')
const authUi = require('./ui.js')
const store = require('./store.js')
const getFormFields = require('../../lib/get-form-fields')

const onAddPosts = function (event) {
  console.log('add posts button')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.addPosts(data)
    .then(authUi.addPostsSuccess)
    .then(onGetPosts)
    .catch(authUi.error)
}

const onGetPosts = function () {
  event.preventDefault()
  authApi.getPosts()
    .then(authUi.getPostsSuccess)
    .catch(authUi.error)
}

let thisId

const onEditButton = function () {
  console.log('edit posts button')
  event.preventDefault()
  $('#edit-posts').show()
  thisId = this.id
  store.thisPost = thisId
  document.getElementById('autofilled').value = thisId
}

const autoFill = function (thisId) {
  document.getElementById('autofill-id').value = thisId
  // document.getElementById('autofill-title').value = thisTitle
  // document.getElementById('autofill-content').value = thisContent
  // document.getElementById('autofill-blog').value = thisBlog
}

const onEditPosts = function (thisId) {
  console.log('edit posts form button')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.editPosts(data)
    .then(authUi.editPostsSuccess)
    .then(onGetPosts)
    .catch(authUi.error)
}

const onDeleteButton = function () {
  console.log('delete posts button')
  event.preventDefault()
  $('#delete-posts').show()
  thisId = this.id
  store.thisPost = thisId
  // thisTitle = this.title
  // thisContent = this.content
  // thisBlog = this.blog
  autoFill(thisId)
}

const onDeletePosts = function () {
  console.log('delete posts form button')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.deletePosts(data)
    .then(authUi.deletePostsSuccess(data))
    .then(onGetPosts)
    .catch(authUi.error)
}

module.exports = {
  onAddPosts,
  onGetPosts,
  onEditPosts,
  onEditButton,
  onDeletePosts,
  onDeleteButton
}
