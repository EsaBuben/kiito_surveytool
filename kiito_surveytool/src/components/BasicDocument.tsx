import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  import {useState} from 'react';
  import { CircularProgress} from '@mui/material';
  import {COLORS} from "../utils/style_constants";

  import {PDFTitle} from "./PDFTitle";



  function BasicDocument(props:any) {
    let yname = props.yname;
    let paivamaara = props.date;
    let data = props.data;
    let answers = props.answers;
    let sivu = props.sivu;
    let kuvat = props.kuvat

    const KiitoLogo_path:string= '/images/KiitoLogo.png';

    let return_button_text:string = props.localData.napit.paluuEtusivulle;

    const [loading,setLoader] = useState<JSX.Element | null>(  <CircularProgress sx={{
      position:'relative',
      zIndex:3,
      left:"50%",
      margin:'auto',
      display:"inline-block",
      isolation:"isolate"
      }}/>)


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
          temp.push(<View style={styles.sectionC}>
            <Text style={styles.kysymykset}>{taso.kysymykset[i]}</Text>
            <Text style={styles.vastaukset}>{answers[answerCounter][i].toString()}</Text>
            </View>)
       }
       answerCounter +=1
    }))
    return temp;
    })

  }


  let otsikko : string[] = props.localData.pdfOtsikot;
    return (
      <>
      {loading}
      <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%', zIndex:2}}>
      <PDFTitle
        title={props.localData.PDFotsikko}
        return_button_text={return_button_text}
        setValittu={props.setValittu}
        setPDFContent={props.setPDFContent}
      />
      <PDFViewer style={styles.viewer} showToolbar = {true}>
        {/* Start of the document*/}
        <Document onRender={() =>setLoader(null)} >
          {/*render a single page*/}
          <Page wrap = {false} size="A4" style={styles.page}>

            {/*render header*/}
            <View fixed style={styles.header}>
              <Text>{paivamaara}</Text>
              <Text>{yname}</Text>
              <Image style={styles.headerLogo} src={KiitoLogo_path}/>
              </View>
            <View fixed style={styles.footer}>
              <Text style={styles.pagenum} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
              )} fixed />
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
              <Text>{yname}</Text>
              <Image style={styles.headerLogo} src={KiitoLogo_path}/>
            </View>
            <View fixed style={styles.footer}>
              <Text style={styles.pagenum} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
              )} fixed />
            </View>


            {/*render the questions and answers*/}

            <Text style={styles.otsikkoB}>{otsikko[1]}</Text>
            <View style={styles.sectionB}>
            {QuesAnsw(data,answers,sivu)}
            </View>
            </Page>

        </Document>
      </PDFViewer>
    </div>
      </>
    );
  }
    // Create styles
    const styles = StyleSheet.create({
      page: {
        backgroundColor: "white",
        color: "black",

      },
      header: {
        margin: 5,
        padding: 5,
        fontSize: 12,
        paddingBottom: 10,
      },
      footer: {
        position: "absolute",
        bottom: 15,
        right: 15,
      },
      pagenum: {
        fontSize: 12,

      },
      headerLogo: {
        width: 135,
        height: 50,
        position: "absolute",
        top: 10,
        right: 20,
      },
      viewer: {
        width: "99.9%", //the pdf viewer will take up all of the width and height
        height: "98%",
        position: "absolute",
        top: 30,
        left: 0,
        zIndex:1
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
        paddingBottom: 5,
        fontSize: 24,
        textAlign: "center",

      },
      otsikkoB: {
        top:0,
        paddingBottom: 3,
        fontSize: 24,
        textAlign: "center",
        textDecoration: "underline",
        position: "relative",
      },
      kategoriaOtsikko:{
        position: "relative",
        paddingBottom: 5,
        fontSize: 18,
        textAlign: "center",
        width: "45%",
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
        margin:15,
      },
      imageTable:{
        width: 600,
        height: 250,
        margin:25,
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
