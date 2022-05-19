import { setUser } from './actions'
import store from './store'

export async function cacheUser(useAuth0, state) {
  const {
    getAccessTokenSilently, 
    isAuthenticated,
    user
  } = useAuth0()

  const accessToken = await getAccessTokenSilently({
    audience: `https://pets/api`,
    scope: "read:current_user"
  })

  if (isAuthenticated && !state?.token) {
    try {
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: accessToken,
      }

      store.dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}