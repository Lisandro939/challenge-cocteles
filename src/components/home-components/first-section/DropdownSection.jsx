import React from 'react'
import { DeleteSearch, Dropdown, DropdownOption, DropdownSearch } from './DropdownSection.styles'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom';
import { handleSearch } from '../../../functions/handleSearch';
import { handleDeleteSearch } from '../../../functions/handleDeleteSearch';

export default function DropdownSection({history, setHistory, display, search, searchInput}) {

    const navigate = useNavigate()

  return (
    <Dropdown display={display}>
      {
        history.map((item, index) => (
          <DropdownOption key={index}>
            <DropdownSearch
            onClick={() => {
                navigate(handleSearch(searchInput, search, item))
            }}
            >
              <Icon width="20px" icon="mdi:clock-arrow" />
              {item.search}
            </DropdownSearch>
            <DeleteSearch
            onClick={() => handleDeleteSearch(item, setHistory, history)}
            >
              <Icon width="20px" icon="iconoir:cancel" />
            </DeleteSearch>
          </DropdownOption>
        ))
      }
    </Dropdown>
  )
}
