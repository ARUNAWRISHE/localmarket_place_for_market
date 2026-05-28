export function validateRegisterPayload(payload) {
  return Boolean(payload.fullName && payload.email && payload.password && payload.roles?.length)
}
