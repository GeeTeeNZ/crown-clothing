import { createSelector } from 'reselect'
import memoize from 'lodash.memoize' // cf below

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections)
        .map(key => collections[key])
)


// Memoize does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections =>
            collections[collectionUrlParam]
    ))