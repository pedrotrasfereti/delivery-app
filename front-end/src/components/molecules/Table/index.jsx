import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Label } from '../../atoms';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';

/* Styled */
import Styled from './Styled';

export default function Table({
  body,
  cols,
  controls,
  deleteItem,
  labels,
  sum,
  title,
}) {
  return (
    <Styled>
      <caption>
        <div className="Container">
          {
            labels.length > 0 && (
              <div className="Labels">
                {
                  labels.map((label, index) => (
                    <span key={ `${label}-${index}` }>{ label }</span>
                  ))
                }
              </div>
            )
          }

          <span className="Caption">{ title }</span>

          {
            controls.length > 0 && (
              <div className="Controls">
                {
                  controls.map(({ label, handleOnClick, disabled }, index) => (
                    <button
                      key={ `${label}-${index}` }
                      type="button"
                      disabled={ disabled }
                      onClick={ () => handleOnClick() }
                    >
                      { label }
                    </button>
                  ))
                }
              </div>
            )
          }
        </div>
      </caption>

      <thead>
        <tr className="Headings">
          <td id="item-column">
            <Label>Item</Label>
          </td>
          {
            cols.map((heading) => (
              <td
                id={ `${heading.toLowerCase()}-column` }
                key={ heading }
              >
                <Label>{ heading }</Label>
              </td>
            ))
          }
        </tr>
      </thead>

      <TableBody data={ body } deleteItem={ deleteItem } />

      <TableFooter sum={ sum } />
    </Styled>
  );
}

Table.propTypes = {
  body: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    subTotal: PropTypes.string,
  })).isRequired,
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
  controls: PropTypes.arrayOf(PropTypes.shape({
    disabled: PropTypes.bool,
    handleOnClick: PropTypes.func,
    label: PropTypes.string,
  })),
  deleteItem: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string),
  sum: PropTypes.string,
  title: PropTypes.string,
};

Table.defaultProps = {
  controls: [],
  deleteItem: false,
  labels: [],
  sum: '',
  title: '',
};
