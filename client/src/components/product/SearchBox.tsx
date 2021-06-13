import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

interface Props {}

const SearchBox = (props: Props) => {
  const [keyword, setKeyword] = useState('');

  const history = useHistory();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) history.push(`/search/${keyword}`);
    else history.push('/');
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        style={{ maxHeight: 40 }}
        type='text'
        name='q'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search Products...'
      />
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
