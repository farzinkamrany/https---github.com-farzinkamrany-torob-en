import React, { useMemo, useRef, useState } from 'react';
import { Button, Input, Select, Spin } from 'antd';
import type { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import { AiOutlineSearch } from 'react-icons/ai';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
>({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
}

async function fetchUserList(username: string): Promise<UserValue[]> {

  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }),
      ),
    );
}

const SearchBox: React.FC = () => {
  const [value, setValue] = useState<UserValue[]>([]);

  return (
    // <DebounceSelect
    //   mode="multiple"
    //   value={value}
    //   placeholder="جستجو در ترب"
    //   fetchOptions={fetchUserList}
    //   onChange={(newValue) => {
    //     setValue(newValue as UserValue[]);
    //   }}
    //   style={{ width: 420 }}
    // />
    <div style={{display:'flex'}}>
    <br /><Input placeholder='search in torob'
      style={{ width: 420 ,    height: '48px'}}/><Button style={{      width: 64,  height: '48px',    background:' #d73948',color:'#fff'}}><AiOutlineSearch size={24}/></Button></div>
  );
};

export default SearchBox;