import React from 'react'

const isoTImeFormat = (dateTime) => {
    const date = new Date(dateTime);
    const localTime = date.toLocaleTimeString ('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
  return localTime;
}

export default isoTImeFormat
