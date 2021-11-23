self.addEventListener(
    'install',
    (event) => {
        console.log("installing service worker", event)
    }
)

self.addEventListener(
    'activate',
    (event) => {
        console.log("activated service worker", event)
        return self.clients.claim()
    }
)