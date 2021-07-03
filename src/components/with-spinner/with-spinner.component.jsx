import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = WrappedCompponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedCompponent {...otherProps} />
        )
    }
    return Spinner
}
export default WithSpinner