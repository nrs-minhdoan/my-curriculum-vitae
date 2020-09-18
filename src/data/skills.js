const skills = {
  frameworks: [
    {
      points: 80,
      icon: require("../assets/images/ic_react.svg"),
      name: "ReactJS",
      link: "https://reactjs.org",
      libraries: [
        {
          name: "React Router",
          link: "https://reacttraining.com/react-router",
        },
        {
          name: "Styled Components",
          link: "https://styled-components.com",
        },
        { name: "Redux", link: "https://redux.js.org" },
        { name: "Redux-Saga", link: "https://redux-saga.js.org" },
        { name: "Mobx", link: "https://mobx.js.org" },
        { name: "Material-UI", link: "https://material-ui.com" },
        { name: "Ant Design", link: "https://ant.design" },
        { name: "Reactstrap", link: "https://reactstrap.github.io" },
        {
          name: "React Bootstrap",
          link: "https://react-bootstrap.github.io",
        },
        {
          name: "React-beautiful-dnd",
          link: "https://react-beautiful-dnd.netlify.com",
        },
        { name: "Formik", link: "https://jaredpalmer.com/formik" },
        { name: "Recharts", link: "http://recharts.org" },
        {
          name: "React Virtualized",
          link: "http://www.reactvirtualized.com",
        },
        {
          name: "React-toastify",
          link: "https://fkhadra.github.io/react-toastify",
        },
        { name: "React Select", link: "https://react-select.com" },
        {
          name: "React Google Maps",
          link: "https://tomchentw.github.io/react-google-maps",
        },
      ],
    },
    {
      points: 80,
      icon: require("../assets/images/ic_react_native.svg"),
      name: "React Native",
      link: "https://reactnative.dev",
      libraries: [
        {
          name: "React Navigation",
          link: "https://reactnavigation.org",
        },
        { name: "React Native Firebase", link: "https://rnfirebase.io" },
        {
          name: "Styled Components",
          link: "https://styled-components.com",
        },
        { name: "Redux", link: "https://redux.js.org" },
        { name: "Redux-Saga", link: "https://redux-saga.js.org" },
        { name: "Mobx", link: "https://mobx.js.org" },
        { name: "Native Base", link: "https://nativebase.io" },
        {
          name: "React Native Elements",
          link: "https://react-native-elements.github.io/react-native-elements",
        },
        { name: "Formik", link: "https://jaredpalmer.com/formik" },
        {
          name: "React Native Camera",
          link: "https://react-native-community.github.io/react-native-camera",
        },
        {
          name: "React-native-vector-icons",
          link: "https://oblador.github.io/react-native-vector-icons",
        },
      ],
    },
    {
      points: 80,
      icon: require("../assets/images/ic_next.svg"),
      name: "NextJS",
      link: "https://nextjs.org",
      libraries: [
        { name: "Redux", link: "https://redux.js.org" },
        { name: "Redux-Saga", link: "https://redux-saga.js.org" },
        { name: "Mobx", link: "https://mobx.js.org" },
        { name: "Reactstrap", link: "https://reactstrap.github.io" },
        {
          name: "React Bootstrap",
          link: "https://react-bootstrap.github.io",
        },
        {
          name: "React-beautiful-dnd",
          link: "https://react-beautiful-dnd.netlify.com",
        },
        { name: "Formik", link: "https://jaredpalmer.com/formik" },
        {
          name: "React Virtualized",
          link: "http://www.reactvirtualized.com",
        },
        {
          name: "React-toastify",
          link: "https://fkhadra.github.io/react-toastify",
        },
      ],
    },
    {
      points: 60,
      icon: require("../assets/images/ic_angular.svg"),
      name: "Angular",
      link: "https://angular.io",
      libraries: [
        { name: "Angular 7", link: "https://v7.angular.io" },
        { name: "Angular 10", link: "https://angular.io" },
        { name: "Ng-Zorro", link: "https://ng.ant.design" },
      ],
    },
    {
      points: 10,
      icon: require("../assets/images/ic_vue.svg"),
      name: "VueJS",
      link: "https://vuejs.org",
      libraries: [],
    },
    {
      points: 60,
      icon: require("../assets/images/ic_bootstrap.svg"),
      name: "Bootstrap",
      link: "https://getbootstrap.com",
      libraries: [
        {
          name: "Bootstrap",
          link: "https://getbootstrap.com/1.4.0",
        },
        {
          name: "Bootstrap 2",
          link: "https://getbootstrap.com/2.3.2",
        },
        {
          name: "Bootstrap 3",
          link: "https://getbootstrap.com/docs/3.4",
        },
        {
          name: "Bootstrap 4",
          link: "https://getbootstrap.com/docs/4.4",
        },
        { name: "Reactstrap", link: "https://reactstrap.github.io" },
        {
          name: "React Bootstrap",
          link: "https://react-bootstrap.github.io",
        },
      ],
    },
  ],
  languages: [
    {
      points: 80,
      icon: require("../assets/images/ic_javascript.svg"),
      name: "JavaScript",
      link: "#",
      libraries: [
        {
          name: "Axios",
          link: "https://github.com/axios/axios",
        },
        {
          name: "Socket.IO",
          link: "https://socket.io",
        },
        {
          name: "Lodash",
          link: "https://lodash.com",
        },
        {
          name: "Moment",
          link: "https://momentjs.com",
        },
        { name: "RxJS", link: "https://rxjs-dev.firebaseapp.com" },
        { name: "Core-JS", link: "https://github.com/zloirock/core-js" },
        { name: "ChartJS", link: "https://www.chartjs.org" },
        {
          name: "SheetJS",
          link: "https://sheetjs.com",
        },
        {
          name: "CryptoJS",
          link: "https://cryptojs.gitbook.io",
        },
        {
          name: "Babel",
          link: "https://babeljs.io",
        },
        {
          name: "ESLint",
          link: "https://eslint.org",
        },
      ],
    },
    {
      points: 70,
      icon: require("../assets/images/ic_typescript.svg"),
      name: "TypeScript",
      link: "https://www.typescriptlang.org",
      libraries: [
        {
          name: "TSLint",
          link: "https://palantir.github.io/tslint",
        },
      ],
    },
    {
      points: 80,
      icon: require("../assets/images/ic_html.svg"),
      name: "HTML",
      link: "#",
      libraries: [
        {
          name: "Pug",
          link: "https://pugjs.org",
        },
        {
          name: "EJS",
          link: "https://ejs.co",
        },
      ],
    },
    {
      points: 80,
      icon: require("../assets/images/ic_css.svg"),
      name: "CSS",
      link: "#",
      libraries: [
        {
          name: "SASS/SCSS",
          link: "https://sass-lang.com",
        },
        {
          name: "JSS",
          link: "https://cssinjs.org",
        },
        {
          name: "Styled Components",
          link: "https://styled-components.com",
        },
      ],
    },
  ],
};

export default skills;
