export function normalizeApiError(error) {
  if (!error) {
    return { message: 'Unknown error', status: 0 }
  }

  if (error.response) {
    return {
      message: error.response.data?.message || 'Request failed',
      status: error.response.status,
      details: error.response.data,
    }
  }

  if (error.request) {
    return { message: 'No response from server', status: 0 }
  }

  return { message: error.message || 'Request failed', status: 0 }
}
