/**
 * @file Methods used to logout user in App file
 */

import jwtDecode from 'jwt-decode';

/**
 * Checks if token is expired
 * @returns boolean
 */
export const isTokenExpired = (token: string, isLogged: boolean): boolean => {
    if (isLogged) {
      const decoded: {
        id: string,
        iat: number,
        exp: number
      } = jwtDecode(token)
      const tokenExpDate: Date = new Date(decoded.exp*1000)
      const isExpired: boolean = tokenExpDate < new Date(Date.now())
      if (isExpired) {
        return true
      }
    }
    return false
}

/**
 * Checks if user has to be log out on page refresh
 * @returns boolean
 */
export const hasToBeLogoutOnRefresh = (isToRemember: boolean, isLogged: boolean): boolean => {
    if (isLogged) {
        if (isToRemember === false) return true
    }
    return false
}