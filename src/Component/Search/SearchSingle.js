import React, { useState } from 'react';
import { Input, Button, Collapse, Divider, List, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ShadowedPanel from '../Panel/ShadowedPanel';

const { Panel } = Collapse;

const SearchSingle = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate fetching search results from an API
    // Replace this with your actual API call
    const fakeApiResults = [
      { title: 'Result 1', content: 'Content for result 1' },
      { title: 'Result 2', content: 'Content for result 2' },
      { title: 'Result 3', content: 'Content for result 3' },
    ];

    setSearchResults(fakeApiResults);
  };

  return (
    <ShadowedPanel>
      <div style={{ display: 'flex' }}>
        <Input
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
        ></Button>
      </div>

      {searchResults.length > 0 && (
        <List
          itemLayout="vertical"
          dataSource={searchResults}
          renderItem={(item) => (
            <List.Item>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </List.Item>
          )}
        />
      )}
    </ShadowedPanel>
  );
};

export default SearchSingle;
