import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";




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
          temp.push(<Text style={styles.kysymykset}>{taso.kysymykset[i]}</Text>)
          temp.push(<Text style={styles.vastaukset}>{answers[answerCounter][i].toString()}</Text>)
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
          <Page size="A4" style={styles.page}>

            {/*render header*/}
            <View fixed style={styles.header}>
              <Text>{paivamaara}</Text>
              <Text>{yname} testinimi</Text>
              <Image style={styles.headerLogo} src={'/KiitoLogo.png'}/>
            </View>


            {/*render the images*/}

            <Text style={styles.otsikko}>{otsikko[0]}</Text>
            <Text style={styles.alaOtsikko}>{data[sivu].sivu}</Text>
              <Image style={styles.imageGraph} src={kuvat[0]} />
              <Image style={styles.imageTable} src={kuvat[1]} />

            {/*render the questions and answers*/}
            <Text break style={styles.otsikko}>{otsikko[1]}</Text>
            {QuesAnsw(data,answers,sivu)}

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
        alignItems: "flex-start",
        margin: 10,
      },
      otsikko: {
        top:0,
        paddingBottom: 10,
        fontSize: 24,
        textAlign: "center",
        textDecoration: "underline",

      },
      alaOtsikko:{
        paddingBottom: 25,
        fontSize: 18,
        textAlign: "center",
        width: 500,
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
        fontSize: 12,
        textDecoration: "underline",
        paddingBottom: 10,
      },
      kategoriaOtsikko:{
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
      },
      vastaukset:{
        fontSize: 24,
        paddingBottom: 10,
      },
    });
  export default BasicDocument;
