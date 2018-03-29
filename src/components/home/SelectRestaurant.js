import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    getRestaurantSuggestions,
    toggleLoadingRestaurant
} from '../../reducers/home'

const SelectRestaurant = (props) => {
    function handleOpen () {
        if (props.suggestions.length === 0) {
            props.toggleLoadingRestaurant()
            props.getRestaurantSuggestions()
        }
    }
    return (
        <Select
            name="form-field-name"
            value={props.value}
            onChange={props.onChange}
            options={props.suggestions}
            placeholder="Select A Restaurant"
            isLoading={props.isLoading}
            onOpen={handleOpen}
        />
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getRestaurantSuggestions,
  toggleLoadingRestaurant
}, dispatch)

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectRestaurant)