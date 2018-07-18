'use strict'

const config = require('./config.js')
const store = require('./store')

// Auth
const signUp = function (data) {
  console.log('api signUp')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log('api.signIn')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('api change password')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  console.log('api signOut')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// Posts CRUD actions
const createPosts = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/posts',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPosts = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/posts'
  })
}

const updatePosts = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/posts/' + data.post.id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePosts = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/posts/' + data.post.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createPosts,
  getPosts,
  updatePosts,
  deletePosts
}
