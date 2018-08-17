export default async function (options = {}) {
  const { path, method } = options
  try {
    const response = await fetch(
      path,
      {
        method,
        'Content-Type': 'application/json',
      },
    )
    return { status: response.status, payload: await response.json() }
  } catch (e) {
    return { error: e }
  }
}
