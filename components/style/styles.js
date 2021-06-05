import { StyleSheet } from 'react-native';

export const  styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    alignSelf: "stretch",
    margin: 32,
    height: 64,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "300",
    borderRadius: 30,
    width: "70%",
  },

  TextInput: {
    marginLeft: 50,
    marginRight: 50,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,

  },
  inputView: {
    backgroundColor: "#E6E6E6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  clockS:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 37,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    color: '#51A0D5',
  },
  detailsText: {
    fontSize: 23,
    margin: 7,
    padding: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    // textAlignVertical: "center"
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center'
  },
  logo: {
    marginHorizontal: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  },
  btnStyle: {
    backgroundColor: "#919191",
    borderRadius: 30,
    margin: 8,
    borderWidth: 1,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: "center"

  },
  btnStyle2: {
    backgroundColor: "#919191",
    borderRadius: 30,
    margin: 8,
    borderWidth: 1,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: "center"

  },
  txtStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: "center",

  },
  center: {
    flex: 1,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stars: {
    flex: 0.5,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    marginTop: 15,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },
  subjTitle: {
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  subjectBody: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20
  },
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  },
  subjectsElementView: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "white",
  },
  scrollView: {
    //backgroundColor: 'green',
    marginHorizontal: 0,
  },
  card: {
    padding: 10,
    margin: 7
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bold: {
    fontWeight: "bold",
    margin: 2,
    color:'#78C5EF',
  },
  headerButton: {
    height: 44,
    width: 44,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  counter: {
    fontSize: 60,
    textAlign: 'center',
    height: 60,
    margin: 10,
  },
  miniCounter: {
    fontSize: 20,
    position: 'relative',
    top: -32,
    right: -50
  },
  parent: {
      display: "flex",
      flexDirection: "row",
      borderWidth:1,
      borderRadius: 80,
      borderColor: "#694966",
      backgroundColor: '#f9f9f9',
      // "#919191",
      //  '#694966',
      position: "relative",
    
      paddingLeft: "6%",
      paddingRight: "6%",
      paddingTop: ".5%",
      paddingBottom: ".5%",
      // maxWidth: "63%"
  },

  child: {
    alignItems : "center",
    fontSize: 36,
    //color: "#C89933",
    textAlign: "right",
    alignItems: "center",
  },

  buttonParent: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "12%",
      marginBottom: "16%"
  },

  button: {
      backgroundColor: "#694966",
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "5%",
      paddingRight: "5%",
      display: "flex",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#694966",
      height: 60,
  },

  buttonText: {
      color: "#C89933",
      fontSize: 20,
      alignSelf: "center"
  }
});


