import React, { Component } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEditUsers } from '../actions/userActions';
import { TextField, Button } from '@material-ui/core';

import SnackBar from './SnackBar';

class AddEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.id : null,
        name: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.name : '',
        email: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.email : '',
        phone: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.phone : '',
        pencard: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.pencard : '',
        driving: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.driving : '',
        Description: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.Description : '',
        Category: this.props.location.state && this.props.location.state.user ? this.props.location.state.user.Category : '',
        edit: this.props.location.state && this.props.location.state.user ? this.props.location.state.edit : false
      },
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose(event, reason){
    if (reason === "clickaway") {
      return;
    }
    this.setState({open: false});
  }

  render() {
    return (
      <Route render={ ({history}) => (
        <div>
          <Formik
          initialValues={this.state.user}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              // actions.handleReset();
              history.push('/');
              this.state.user.id ? this.props.addNewUser([{...values, id: this.state.user.id }]) : this.props.addNewUser([values])
             
            }, 100);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Name field is required'),
            email: Yup.string()
              .email('Email not valid')
              .required('Email field is required'),
            phone: Yup.string()
              .required('Phone field is required')
              .max(10)
              .min(10),
            pencard: Yup.string().required('pencard field is required'),
            driving: Yup.string().required('driving field is required'),
            Description: Yup.string().required('Description field is required'),
            Category: Yup.string().required('Category field is required')
          })}
        >
       
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            { console.log(this.props.addNewUser)}
            return (
              <form
                onSubmit={handleSubmit}
                style={{ width: '30%', margin: 'auto', background: "white", padding: "16px", height: "90vh" }}
              >
                <TextField
                  id="standard-name"
                  type="text"
                  name="name"
                  label="Name" // Label acts like placeholder
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
                {errors.name && touched.name && (
                  <div
                    style={{ textAlign: 'start', marginTop: '2px', color: 'red' }}
                  >
                    {errors.name}
                  </div>
                )}
  
                <TextField
                  id="standard-email"
                  type="email"
                  name="email"
                  label="Email" // Label acts like placeholder
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
                {errors.email && touched.email && (
                  <div
                    style={{ textAlign: 'start', marginTop: '2px', color: 'red' }}
                  >
                    {errors.email}
                  </div>
                )}
  
                <TextField
                  id="standard-phone"
                  type="text"
                  name="phone"
                  label="Phone Number" // Label acts like placeholder
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
                {errors.phone && touched.phone && (
                  <div
                    style={{ textAlign: 'start', marginTop: '2px', color: 'red' }}
                  >
                    {errors.phone}
                  </div>
                )}
  
                <TextField
                  id="standard-name"
                  type="text"
                  name="pencard"
                  label="pencard" // Label acts like placeholder
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pencard}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
                {errors.pencard && touched.pencard && (
                  <div
                    style={{ textAlign: 'start', marginTop: '2px', color: 'red' }}
                  >
                    {errors.pencard}
                  </div>
                )}
                <TextField
                  id="standard-website"
                  type="text"
                  name="driving"
                  label="driving" // Label acts like placeholder
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.driving}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                {errors.driving && touched.driving && (
                  <div
                    style={{ textAlign: 'start', marginTop: '2px', color: 'red' }}
                  >
                    {errors.driving}
                  </div>
                )}
                <TextField
                  id="standard-website"
                  type="text"
                  name="Description"
                  label="Description" // Label acts like placeholder
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Description}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                {errors.Description && touched.Description && (
                  <div
                    style={{ textAlign: 'start', marginTop: '2px', color: 'red' }}
                  >
                    {errors.Description}
                  </div>
                )}
                <TextField
                  id="standard-website"
                  type="text"
                  name="Category"
                  label="Category" // Label acts like placeholder
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Category}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                {errors.Category && touched.Category && (
                  <div
                    style={{ textAlign: 'start', marginTop: '2px', color: 'red' }}
                  >
                    {errors.Category}
                  </div>
                )}
  
                <Button
                  disabled={!dirty && !isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ margin: '1em', float: 'right' }}
                >
                  {this.state.user.edit ? 'Update User' : 'Add User'}
                </Button>
              </form>
            );
          }}
        </Formik>
        <SnackBar
          open={this.state.open}
          handleClose={this.handleClose}
          variant="success"
          message="User Created Successfully"
        />
      </div>
      )} />
    );
  }
}

AddEditUser.propTypes = {
  addNewUser: PropTypes.func,
  snackBarMessage: PropTypes.string,
  snackBarVariant: PropTypes.string
};

const mapStateToProps = state => ({
  snackBarMessage: state.utils.message,
  snackBarVariant: state.utils.variant
})

export default connect(
  mapStateToProps,
  { addNewUser: addEditUsers }
)(AddEditUser);
