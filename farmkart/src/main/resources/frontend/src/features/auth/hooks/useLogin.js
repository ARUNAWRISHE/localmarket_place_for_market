import useAuth from '../../../hooks/useAuth.js'

export default function useLogin() {
  const { login } = useAuth()
  return { login }
}
