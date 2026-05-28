import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { useTranslation } from "./i18n-lite";

/* const Filter = props => {
  const { t } = useTranslation();

  const DEFAULT_CATEGORY_PLACEHOLDER = t("card.chooseCategory");
  const DEFAULT_ITEM_PLACEHOLDER = t("card.chooseOption");

  const handleCategoryChange = option => props.handleFilterCategoryChange(option);
  const handleItemChange = option => props.handleFilterItemChange(option);

  const optionsHash = options => options.map(option => ({ value: option, label: option }));

  const selectedCategoryOption = optionsHash(props.categories).find(
    o => o.value === props.filterCategory
  ) || null;

  const selectedItemOption = optionsHash(props.itemOptions).find(
    o => o.value === props.filterItem
  ) || null;

  return (
    <>
      <span className="card--nav-filter">{t("filter.stories")}</span>

      <Select
        className="itemFilter"
        classNamePrefix="select"
        value={selectedItemOption}
        placeholder="Escolha o título"
        onChange={handleItemChange}
        isClearable
        isSearchable
        name="filter-items"
        options={props.filterMap.map(title => ({
          value: title,
          label: title
        }))}
      />
    </>
  );
};
 */

const Filter = props => {
  const handleItemChange = option => props.handleFilterItemChange(option);

  const options = props.filterMap.map(title => ({
    value: title,
    label: title
  }));

  return (
    <>
      <Select
        className="itemFilter"
        classNamePrefix="select"
        value={options.find(o => o.value === props.filterItem) || null}
        placeholder="Selecione a constelação"
        onChange={handleItemChange}
        isClearable
        isSearchable
        options={options}
      />
    </>
  );
};

Filter.propTypes = {
  categories: PropTypes.array,
  filterMap: PropTypes.object,
  clearFilteredStories: PropTypes.func,
  handleFilterCategoryChange: PropTypes.func,
  handleFilterItemChange: PropTypes.func,
  itemOptions: PropTypes.array
};

Filter.defaultProps = {
  categories: [],
  filterMap: {},
  clearFilteredStories: () => { }
};

export default Filter;
