const req = require.context('../../icons/svg/wp', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

const re = /\.\.\/(.*)\.svg/

const wpIcons = requireAll(req).map(i => {
  return i.match(re)[1]
})

export default wpIcons
