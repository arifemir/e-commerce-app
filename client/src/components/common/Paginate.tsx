import * as React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
  pages: number;
  page: number;
  isAdmin?: boolean;
  keyword?: string;
}

const Paginate = ({ pages, page, isAdmin, keyword }: Props) =>
  pages > 1 ? (
    <Pagination>
      {Array.from(Array(pages).keys()).map(x => (
        <LinkContainer key={x + 1} to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}>
          <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  ) : (
    <></>
  );

export default Paginate;
