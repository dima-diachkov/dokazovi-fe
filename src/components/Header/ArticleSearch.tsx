import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './Header.styles';
import { useEffectExceptOnMount } from '../../old/lib/hooks/useEffectExceptOnMount';
import { fetchPostsByTitle } from './fetchPostsByTitle';

// import { IPostsOBJ } from '../../models/adminLab/types';
import { IPost } from '../../old/lib/types';

interface IArticleSearch {
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IOption {
  id: number;
  title: string;
}

// const getOptions = (state: RootStateType) => {
//   const { posts } = selectAdminLab(state);

//   return Object.values(posts).map((post) => post.title);
// };

export const ArticleSearch: React.FC<IArticleSearch> = ({ setVisibility }) => {
  const classes = useStyles();
  const history = useHistory();
  const defaultFilterOptions = createFilterOptions();
  const OPTIONS_LIMIT = 10;
  const [postOptions, setPostOptions] = useState<IOption[]>([]);

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (event.target.value !== '' || event.target.value !== null) {
      setInputValue(event.target.value);
    }
  };

  useEffectExceptOnMount(() => {
    if (inputValue === '') {
      setPostOptions([]);
      return;
    }
    const getTitles = async () => {
      const posts = await fetchPostsByTitle(inputValue);
      const titleOptions = posts.map((post) => {
        const { id, title } = { ...post };
        return { id, title };
      });
      // console.log(titleOptions);
      setPostOptions(titleOptions);
    };
    console.log(postOptions);
    getTitles();
  }, [inputValue]);

  // const filterOptions = (options, state: FilterOptionsState<IOption>) => {
  //   console.log(state);
  //   return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  // };

  const PopperMy = (props) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
      <Popper
        className={classes.myPopper}
        {...props}
        style={{
          marginTop: '22px',
          width: '100%',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      />
    );
  };

  const handleOnChange = (e, value) => {
    history.push(`/posts/${value.id}`);
    setVisibility(false);
    setInputValue('');
  };

  return (
    // <ClickAwayListener onClickAway={() => setVisibility(false)}>
    <Autocomplete
      filterOptions={(x) => x}
      fullWidth
      disableClearable
      freeSolo
      options={postOptions}
      PopperComponent={PopperMy}
      getOptionLabel={(option: IOption) => option.title}
      onChange={(e, value) => handleOnChange(e, value)}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          value={inputValue}
          variant="standard"
          className={classes.searchInput}
          onChange={(event) => handleInputChange(event)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end" className={classes.inputAdornment}>
                <SearchIcon className={classes.searchInputIcon} />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      )}
    />
    // </ClickAwayListener>
  );
};