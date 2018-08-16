export default async function (options = {}) {
  const { path } = options
  console.log(options)
  try {
    const response = await fetch(
      path,
      {
        method: 'GET',
        'Content-Type': 'application/json',
      },
    )
    return { status: response.status, payload: await response.json() }
  } catch (e) {
    return { error: e }
  }
}
