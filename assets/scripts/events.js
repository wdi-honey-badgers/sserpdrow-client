'use strict'

const authApi = require('./api.js')
const authUi = require('./ui.js')
const store = require('./store.js')
const getFormFields = require('../../lib/get-form-fields')

const onCreatePosts = function (event) {
  console.log('Create posts button')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Create post data is:\n', data)
  authApi.createPosts(data)
    .then(authUi.addPostsSuccess)
    // .then(onGetPosts)
    .catch(authUi.error)
}

const onGetPosts = function () {
  event.preventDefault()
  console.log('onGetPosts function fired')
  authApi.getPosts()
    .then(authUi.getPostsSuccess)
    .catch(authUi.error)
}

let thisId

// const onUpdatePosts = function () {
//   console.log('Update posts submit')
//   event.preventDefault()
//   // thisId = this.id
//   // store.thisPost = thisId
//   // document.getElementById('autofilled').value = thisId
//   const data = getFormFields(event.target)
//   console.log('Update post data is:\n', data)
//   authApi.updatePosts(data)
//     .then(authUi.updatePostsSuccess)
//     .catch(authUi.error)
// }

const autoFill = function (thisId) {
  document.getElementById('autofill-id').value = thisId
  // document.getElementById('autofill-title').value = thisTitle
  // document.getElementById('autofill-content').value = thisContent
  // document.getElementById('autofill-blog').value = thisBlog
}

const onUpdatePosts = function (event) {
  console.log('update posts form button')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.updatePosts(data)
    .then(authUi.updatePostsSuccess)
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
  onCreatePosts,
  onGetPosts,
  onUpdatePosts,
  // onEditButton,
  onDeletePosts,
  onDeleteButton
}
