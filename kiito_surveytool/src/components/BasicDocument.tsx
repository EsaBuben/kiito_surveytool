import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  import {COLORS} from "../utils/style_constants";




  function BasicDocument(props:any) {
    let yname = props.yname;
    let paivamaara = props.date;
    let data = props.data;
    let answers = props.answers;
    let localData = props.localData;
    let sivu = props.sivu;
    let kuvat = props.kuvat
    let vastaukset : string[] = []

    console.log(answers)
    function QuesAnsw(data:any, answers:any, sivu:number) {
    let answerCounter:number = 0;
   
    return data[sivu].kategoriat.map((kategoria: { tasot: any[]; otsikko: string;}, index:number) => {
      let temp : any[] = [];
      if(index === 0){
        temp.push(<Text style={styles.kategoriaOtsikko}>{kategoria.otsikko}</Text>)
      }else {
      temp.push(<Text style={styles.kategoriaOtsikko} break >{kategoria.otsikko}</Text>)
    }
      temp.concat(kategoria.tasot.map(( taso: { kysymykset:any[]; alaotsikko: string; }) => {
        temp.push(<Text style={styles.alaOtsikko}>{taso.alaotsikko}</Text>)
        for(let i =0 ; i < taso.kysymykset.length; i++) {
          temp.push(<View style={styles.sectionC}>) 
          temp.push(<Text style={styles.kysymykset}>{taso.kysymykset[i]}</Text>)
          temp.push(<Text style={styles.vastaukset}>{answers[answerCounter][i].toString()}</Text>)
          temp.push(</View>)
       }
       answerCounter +=1
    }))
    return temp;
    })

  }

  let otsikko : string[] = ["Raportti", "Kysymykset ja vastaukset"]
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page wrap = {false} size="A4" style={styles.page}>

            {/*render header*/}
            <View fixed style={styles.header}>
              <Text>{paivamaara}</Text>
              <Text>{yname} testinimi</Text>
              <Image style={styles.headerLogo} src={'/KiitoLogo.png'}/>
            </View>

            {/*render the images*/}
            <View style={styles.section}>
            <Text style={styles.otsikkoA}>{otsikko[0]}</Text>
            <Text style={styles.otsikkoB}>{data[sivu].sivu}</Text>
              <Image style={styles.imageGraph} src={kuvat[0]} />
              <Image style={styles.imageTable} src={kuvat[1]} />
            </View>
            </Page>
            
            <Page size="A4" style={styles.page} >
              {/*render header*/}
            <View fixed style={styles.header}>
              <Text>{paivamaara}</Text>
              <Text>{yname} testinimi</Text>
              <Image style={styles.headerLogo} src={'/KiitoLogo.png'}/>
            </View>

            {/*render the questions and answers*/}
            
            <Text style={styles.otsikkoB}>{otsikko[1]}</Text>
            <View style={styles.sectionB}>
            {QuesAnsw(data,answers,sivu)}
            </View>
            </Page>
          
        </Document>
      </PDFViewer>
    );
  }
    // Create styles
    const styles = StyleSheet.create({
      page: {
        backgroundColor: "white",
        color: "black",
      },
      header: {
        margin: 10,
        padding: 10,
        fontSize: 12,
        paddingBottom: 10,
      },
      headerLogo: {
        width: 135,
        height: 50,
        position: "absolute",
        top: 10,
        right: 20,
      },
      viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
        position: "absolute",
        top: 0,
        left: -230,
      },
      section: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
      },
      sectionB: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        textAlign: "left",
      },
      sectionC:{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        alignContent: "space-between",
        margin: -1,
        textAlign: "left",
        border: "1px solid black",
        backgroundColor: COLORS.primary,
        borderRadius:5,

      },
      otsikkoA: {
        top:0,
        paddingBottom: 3,
        fontSize: 24,
        textAlign: "center",

      },
      otsikkoB: {
        top:0,
        paddingBottom: 3,
        fontSize: 24,
        textAlign: "center",
        textDecoration: "underline",
      },
      kategoriaOtsikko:{
        position: "relative",
        paddingBottom: 5,
        fontSize: 18,
        textAlign: "center",
        width: "50%",
      },
      alaOtsikko:{
        padding: 10,
        fontSize: 18,
        textAlign: "center",
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
        borderTop: "1px solid black",
      },
      imageGraph: {
        width: 600,
        height: 250,
        paddingBottom: 25,
      },
      imageTable:{
        width: 600,
        height: 250,
      },

      kysymykset:{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        fontSize: 14,
        letterSpacing: 1,
        textDecoration: "underline",
        margin:"auto",
        padding: 20,
        border: "1px solid black",
        color:"white",
        backgroundColor: COLORS.secondary,
        borderRadius:5,
      },
      vastaukset:{
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        width: "10%",
        fontSize: 24,
        margin:"auto",
        color:"white",
        backgroundColor: COLORS.primary,
        borderRadius:5,

        
      },
    });
  export default BasicDocument;
