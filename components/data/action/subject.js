import { ADD_NEW_SUBJECT, DELETE_SUBJECT,ADD_LEARNING_TIME,SUBJECT_CHANGE_KEY,ADD_LEARNING_TIME_DAY } from './types';


export const addNewSubject = (subjectName,subjectTime,specificLearningTime,subjectNumWeeks) => (
    {
        type: ADD_NEW_SUBJECT,
        subjectName: subjectName,
        subjectTime: subjectTime,
        specificLearningTime : specificLearningTime,
        subjectNumWeeks : subjectNumWeeks,
      
    }
)

export const addLearningTime = (key, labels, datasets) => (
    {
        type: ADD_LEARNING_TIME,
        key: key,      
        labels : labels,
        datasets : datasets,
    }
)
export const addLearningTimeDay = (key, labels, datasets) => (
    {
        type:ADD_LEARNING_TIME_DAY,
        key: key,      
        labels : labels,
        datasets : datasets,
    }
)

export const subjectChangeKey = (key) => (
    {
        type:SUBJECT_CHANGE_KEY,
        subjectChangeKey: key,      
    }
)

export const deleteSubject = (key) => (
    {
        type: DELETE_SUBJECT,
        key: key  
    }
)

  