import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { actions } from '../Actions/actions';
import { connect } from 'react-redux';
import './list.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class ListComponent extends Component {
    
    render() {

        return (
            <div>
                <Formik
                    initialValues={{city: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        this.props.loadData(values.city);
                        setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        city: Yup.string().required('Required')
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="city"><b>City</b></label>
                                <input
                                    id="city"
                                    placeholder="Enter your city"
                                    type="text"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.city && touched.city ? 'error' : ''}
                                />
                                
                                {errors.city && errors.touched && <div className="input-feedback">{errors.city}</div>}
                               
                                <Button
                                    style={{ margin: 1 }}
                                    variant="contained"
                                    color="secondary"
                                    type="button"
                                    className="outline"
                                    onClick={handleReset} 
                                >
                                    Reset
                                </Button>
            
                                <Button style={{ margin: 1 }} type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </form>
                        );
                    }}
                </Formik>
                <div className="output">
                    <ul style={{ listStyle: 'none' }}>
                    {this.props.users.users.map(user => (
                        <li key={user.id}>
                        <Card style={{ maxWidth: 345, margin: 5 }}>
                            <CardActionArea>
                            <CardMedia
                                style={{ height: 140 }}
                                image={user.avatar_url}
                                title={user.login}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {user.login}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="primary">
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer">Go to {user.login} page</a>
                            </Button>
                            </CardActions>
                        </Card>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.users)
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: city => dispatch(actions.loadData(city))
    };
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);

