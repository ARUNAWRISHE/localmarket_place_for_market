import useAuth from '../../../hooks/useAuth.js'

export default function useRegister() {
  const { register } = useAuth()
  return { register }
}
