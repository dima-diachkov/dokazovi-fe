import React, { useEffect } from 'react';
import { isEmpty, uniq } from 'lodash';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { fetchExperts, setExpertsPage } from '../store/expertsSlice';
import { RootStateType } from '../../../store/rootReducer';
import ExpertsList from '../../../lib/components/Experts/ExpertsList';
import LoadingInfo from '../../../lib/components/LoadingInfo';
import { useStyles } from '../styles/ExpertsView.styles';
import {
  FilterTypeEnum,
  IDirection,
  IRegion,
  QueryTypeEnum,
} from '../../../lib/types';
import { selectExpertsByIds } from '../../../store/selectors';
import { ICheckboxFormState } from '../../../lib/components/Filters/CheckboxFilterForm';
import CheckboxDropdownFilterForm from '../../../lib/components/Filters/СheckboxDropdownFilterForm';
import { getQueryTypeByFilterType } from '../../../lib/utilities/filters';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ExpertsView: React.FC = () => {
  const classes = useStyles();
  const query = useQuery();
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    expertIds,
    meta: { totalPages, pageNumber, loading },
  } = useSelector((state: RootStateType) => state.experts.experts);

  const experts = selectExpertsByIds(expertIds);

  const regions = useSelector(
    (state: RootStateType) => state.properties?.regions,
  );
  const directions = useSelector(
    (state: RootStateType) => state.properties?.directions,
  );
  const propertiesLoaded = !isEmpty(regions) && !isEmpty(directions);

  const fetchData = () => {
    const pageQuery = Number(query.get(QueryTypeEnum.PAGE));
    const regionsQuery = query.get(QueryTypeEnum.REGIONS);
    const directionsQuery = query.get(QueryTypeEnum.DIRECTIONS);

    const isPage = pageQuery ? pageQuery - 1 : 0;
    const regionsFilterQuery = regionsQuery
      ? regionsQuery.split(',').filter(Number).map(Number)
      : [];
    const directionsFilterQuery = directionsQuery
      ? directionsQuery.split(',').filter(Number).map(Number)
      : [];

    dispatch(setExpertsPage(isPage));
    dispatch(
      fetchExperts({
        page: isPage,
        regions: regionsFilterQuery,
        directions: directionsFilterQuery,
      }),
    );
  };

  const setFilters = (
    checked: ICheckboxFormState,
    filterType: FilterTypeEnum,
  ) => {
    const queryType = getQueryTypeByFilterType(filterType);
    const checkedIds = Object.keys(checked).filter((key) => checked[key]);
    const isQuerySame = uniq(Object.values(checked)).length === 1; // removing the query if user checks/unchecks the last box

    query.set(queryType, checkedIds.join(','));
    if (!checkedIds.length || isQuerySame) {
      query.delete(queryType);
    }

    query.set(QueryTypeEnum.PAGE, '1');

    history.push({
      search: query.toString(),
    });
  };

  const handlePageChange = (_, newPage: number) => {
    query.set(QueryTypeEnum.PAGE, newPage.toString());
    history.push({
      search: query.toString(),
    });
  };

  useEffect(() => {
    fetchData();
  }, [
    query.get(QueryTypeEnum.PAGE),
    query.get(QueryTypeEnum.REGIONS),
    query.get(QueryTypeEnum.DIRECTIONS),
  ]);

  const correctPageNumber = pageNumber === 0 ? 1 : pageNumber + 1;

  const selectedRegionsString = query.get(QueryTypeEnum.REGIONS)?.split(',');
  const selectedDirectionsString = query
    .get(QueryTypeEnum.DIRECTIONS)
    ?.split(',');

  let selectedRegions: IRegion[] | undefined = regions?.filter((region) =>
    selectedRegionsString?.includes(region.id.toString()),
  );
  let selectedDirections:
    | IDirection[]
    | undefined = directions?.filter((direction) =>
    selectedDirectionsString?.includes(direction.id.toString()),
  );

  selectedRegions = !isEmpty(selectedRegions) ? selectedRegions : undefined;
  selectedDirections = !isEmpty(selectedDirections)
    ? selectedDirections
    : undefined;

  return (
    <>
      {propertiesLoaded && (
        <Grid container direction="column">
          <CheckboxDropdownFilterForm
            onFormChange={setFilters}
            possibleFilters={regions}
            selectedFilters={selectedRegions}
            filterTitle="Регіони: "
            filterType={FilterTypeEnum.REGIONS}
          />
          <CheckboxDropdownFilterForm
            onFormChange={setFilters}
            possibleFilters={directions}
            selectedFilters={selectedDirections}
            filterTitle="Напрямки: "
            filterType={FilterTypeEnum.DIRECTIONS}
          />
        </Grid>
      )}
      <Box mt={2}>
        {loading === 'pending' ? (
          <Grid container direction="column" alignItems="center">
            <LoadingInfo loading={loading} />
          </Grid>
        ) : (
          <>
            <Grid container spacing={4} direction="row">
              <ExpertsList experts={experts} />
            </Grid>
            <Box mt={2} mb={2}>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
              >
                <Pagination
                  count={totalPages}
                  page={correctPageNumber}
                  showFirstButton
                  showLastButton
                  onChange={handlePageChange}
                />
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default ExpertsView;
