import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getRestaurauntSuggestions} from '../../reducers/home'

class SelectRestauraunt extends React.Component {
    render () {
        const options = [
            { value: 'kljfak133', label: 'Chow' },
            { value: '142412m', label: 'Old Quarter' },
        ]
        return (
            <Select
                name="form-field-name"
                value={this.props.value}
                onChange={this.props.onChange}
                options={options}
            />
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getRestaurauntSuggestions,
}, dispatch)

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectRestauraunt)