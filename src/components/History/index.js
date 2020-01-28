import React from 'react'

export const History = ({data}) => {
    return (
        <div className="history">
        <h2>Historial</h2>
        <hr />
        {data.detail.map(detail => (
          <div>
            <div className="history__date">
              <p>
                <i className="icon icon-check"></i>
                {detail.fecha}
              </p>
            </div>
            <div className="history__description">
              <textarea value={detail.descripcion} readOnly />
            </div>
          </div>
        ))}
      </div>
    )
}
