import React, {useContext} from 'react'

import TokensList from './TokensList'
import { AuthContext } from '../../shared/context/auth-context'

const TokensUser = () => {
    const {walletData} = useContext(AuthContext)

    return (
        <TokensList data={walletData} />
    )
}

export default TokensUser
