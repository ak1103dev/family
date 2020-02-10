/** @jsx jsx */
// import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

function Table({ columns, data }) {
  return (
    <table css={css`
      border-collapse: collapse;
      width: 100%;
    `}>
      <thead>
        <tr>
          {
            columns.map(({name, key}) => (
              <th key={key} css={css`
                border: 1px solid #dddddd;
                padding: 8px;
                text-align: left;
              `}>{name}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => {
            const cells = columns.map(({ key }) => row[key])
            return (
              <tr key={row._id} css={css`
                &:nth-of-type(odd) {
                  background-color: #dddddd;
                }
              `}>
                {
                  cells.map((cell, index) => (
                    <td key={`${index}`} css={css`
                      border: 1px solid #dddddd;
                      padding: 8px;
                      text-align: left;
                    `}>{cell}</td>
                  ))
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  columns: [],
  data: [],
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
}

export default Table
