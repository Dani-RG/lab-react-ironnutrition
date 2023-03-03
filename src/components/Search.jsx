import { Divider, Input } from 'antd';

function Search({ handleSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" placeholder="Search" onChange={e => handleSearch(e.target.value)} />
    </>
  );
}

export default Search;
