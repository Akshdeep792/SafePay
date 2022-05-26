//route error -not found
const notFoundMiddleware = (req, res) => {
    res.status(404).send("Route doesnot Exists")
}

export default notFoundMiddleware