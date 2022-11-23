// const params: Array<object> = [
//     {
//         title: 'Специальность',
//         type: 'spec',
//         data: [
//             'Data Scientist',
//             'Data Engineer',
//             'Data Analyst',
//             'Machine Learning Engineer',
//             'Все',
//         ],
//     },
//     {
//         title: 'Уровень',
//         type: 'lvl',
//         data: [
//             'Junior',
//             'Middle',
//             'Senior',
//             'Director',
//             'Все',
//         ]
//     },
//     {
//
//         title: 'Страна',
//         type: 'country',
//         data: [
//             'США',
//             'Великобритания',
//             'Канада',
//             'Индия',
//             'Германия',
//             'Все',
//         ]
//
//     },
//     {
//
//         title: 'Занятость',
//         type: 'employment',
//         data: [
//             'Полная',
//             'Частичная',
//             'Контракт',
//             'Фриланс',
//             'Все',
//         ]
//
//     },
// ]

const params: Array<object> = [
    {
        data: ["Data Analyst", "Data Engineer", "Data Scientist", "Machine Learning Engineer", "Все"],
        title: "Специальность",
        type: "spec"
    },
    {
        data: ["Junior", "Middle", "Senior", "Director", "Все"],
        title: "Уровень",
        type: "lvl"
    },
    {
        data: ["Канада", "Индия", "Великобритания", "США", "Все"],
        title: "Страна",
        type: "country"
    }, {
        data: ["Офис", "Гибрид", "Удаленка", "Все"],
        title: "Формат работы",
        type: "remote"
    }, {
        data: ["2020", "2021", "2022", "Все"],
        title: "Год",
        type: "year"
    }, {
        data: ["Большая", "Средняя", "Маленькая", "Все"],
        title: "Размер компании",
        type: "size"
    }
]
export default params