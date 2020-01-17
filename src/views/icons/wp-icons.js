const req = require.context('../../icons/wp', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

const re = /\.\/(.*)\.svg/

const wpIcons = requireAll(req).map(i => {
  return i.match(re)[1]
})
console.log(wpIcons)
export default wpIcons
