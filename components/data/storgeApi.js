import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addNewSubject, deleteSubject,subjectChangeKey, addLearningTime,addLearningTimeDay } from './action/subject';

function mapStateToProps(state) {
    return {

        subject: state.subjectReducer.subjectList

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewSubject: (subjectName) => dispatch(addNewSubject(subjectName)),
        subjectChangeKey: (key) => dispatch(subjectChangeKey(key)),
        addLearningTime: (key,labels, datasets) => dispatch(addLearningTime(key,labels, datasets)),
        addLearningTimeDay: (key,labels, datasets) => dispatch(addLearningTimeDay(key,labels, datasets)),
        delete: (key) => dispatch(deleteSubject(key)),
    }
}

export {mapStateToProps, mapDispatchToProps}