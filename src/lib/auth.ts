'use client'

import Backendless from './backendless'

export function isLoggedIn() {
  return !!Backendless.UserService.getCurrentUser()
}
