import React from 'react';
import TokenItem from './TokenItem';

const TokensList = ({data}) => {

console.log(data[0].tokensOwnedByUser);

if (data.length === 0) {
    return (
        <div className="tokens__empty-message">No Tokens Found</div>
    )
}

  return (
    <div>
      {data[0].tokensOwnedByUser.map((token) => (
        <TokenItem key={token} token={token} />
      ))}
    </div>
  );
};

export default TokensList;
