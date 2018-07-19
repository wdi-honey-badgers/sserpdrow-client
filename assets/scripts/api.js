'use strict'

const config = require('./config.js')
const store = require('./store')

// Auth
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
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

const updatePosts = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/posts/' + id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePosts = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/posts/' + data,
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
