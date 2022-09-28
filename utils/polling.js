async function subscribe() {
  let res = await fetch('/xx/yy')
  if (res.status !== 200) {
    showToast(res.message)
    await new Promise(resolve => setTimeout(resolve, 1000))
    await subscribe()
  } else if (res.status == 502) {
    await subscribe()
  } else {
    showToast(res.message)
    await subscribe()
  }
}