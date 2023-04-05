const getPath = (image: string): string =>  require(`@/assets/icons/${image}.svg`)

//Icons
const searchIcon = getPath('searchIcon')

export {
  searchIcon,
}