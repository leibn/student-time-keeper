import { ADD_NEW_SUBJECT, DELETE_SUBJECT, ADD_LEARNING_TIME, SUBJECT_CHANGE_KEY,ADD_LEARNING_TIME_DAY } from '../action/types';



const initialState = {
    subjectList: [],
    subjectChange: '',
}

let key = 1;
const LengthWeek = 5;
const subjectReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_SUBJECT:
            return {
                ...state,
                subjectList: state.subjectList.concat({
                    key: key++,
                    name: action.subjectName,
                    //allCoursTime: actiom.coursTime,
                    timePeerWeak: action.subjectTime,
                    specificLearningTime: action.specificLearningTime,
                    subjectNumWeeks: action.subjectNumWeeks,
                    labels: [
                        ".",
                    ],
                    datasets: [
                        {
                            data: [
                                0,

                            ],
                            color: (opacity = 1) => `rgba(120, 197, 239, 1)`
                        },
                        {
                            data: [
                                (action.subjectTime / 5),

                            ],
                            color: () => `rgba(81, 160, 213, 1)`
                        }
                    ]
                },
                )
            }

        case DELETE_SUBJECT:
            return {
                ...state,
                subjectList: state.subjectList.filter((item) =>
                    item.key != key
                )
            };
        case SUBJECT_CHANGE_KEY:
            return {
                ...state,

                subjectChange: action.key,
            };

        case ADD_LEARNING_TIME_DAY:
            console.log('case ADD_LEARNING_TIME_DAY:');
            return {
                ...state,
                subjectList: state.subjectList.map(subject => subject.key === action.key ?
                    // transform the one with a matching id

                    {
                        ...subject, labels: subject.labels.concat([action.labels,]),
                        datasets: subject.datasets.map(dataObject => (dataObject === subject.datasets[0]) ?
                            { ...dataObject, data: dataObject.data.concat(action.datasets) }
                            :
                            { ...dataObject, data: dataObject.data.concat([(subject.timePeerWeak) / LengthWeek,]) }
                        )
                    }


                    :
                    // { ...subject, labels: subject.labels.concat([action.labels,]), datasets: subject.datasets.map(dataObject => dataObject ? { ...dataObject, data: dataObject.data.concat(action.datasets) } : dataObject) } :
                    // otherwise return original todo
                    subject
                ),
            };
        case ADD_LEARNING_TIME:
            console.log('ADD_LEARNING_TIME:');
            return {
                ...state,
                subjectList: state.subjectList.map(subject => subject.key === action.key ?
                    // transform the one with a matching id

                    {
                        ...subject, labels: subject.labels.concat([action.labels,]),
                        datasets: subject.datasets.map(dataObject => (dataObject === subject.datasets[0]) ?
                            { ...dataObject, data: dataObject.data.concat(action.datasets) }
                            :
                            { ...dataObject, data: dataObject.data.concat([(subject.timePeerWeak) / LengthWeek,]) }
                        )
                    }


                    :
                    // { ...subject, labels: subject.labels.concat([action.labels,]), datasets: subject.datasets.map(dataObject => dataObject ? { ...dataObject, data: dataObject.data.concat(action.datasets) } : dataObject) } :
                    // otherwise return original todo
                    subject
                ),
            };
        // const index = action.key;
        // const newState = [...state];
        // newState[index] = { ...state[index], done: !newState[index].done };
        // return newState;
        // const index = action.key;
        // return state.subjectList.map((item) => (
        //     item.key === index ? { ...item, labels: subjectObject.labels.concat(action.learnDate), datasets: subjectObject.datasets.concat(action.datasets) } : item
        //));
        default: return state;
    }
    return state
}

export default subjectReducer;