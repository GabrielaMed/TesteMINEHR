import  React from 'react';
import { MdFilterAlt } from 'react-icons/md';
import { Button } from './styles';

export function FilterButton() {
  return (
    <Button>
      <MdFilterAlt size={13.32}/>
        Filtrar
    </Button>
  );
}

