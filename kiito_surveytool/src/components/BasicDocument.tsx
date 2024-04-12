import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";


  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#d11fb6",
      color: "white",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
      
  function BasicDocument(props:any) {
    let yname = props.yname;
    let paivamaara = props.date;
    let data = props.data;
    let answers = props.answers;
    let localData = props.localData;
    let sivu = props.sivu;
    let vastaukset : string[] = []
  

    function QuesAnsw(data:any, answers:any, sivu:number) {

    return data[sivu].kategoriat.map((kategoria: { tasot: any[]; otsikko: string; }) => {
      let temp : any[] = [];
       temp.push(<Text>{kategoria.otsikko}</Text>)
    temp.concat(kategoria.tasot.map((taso: { kysymykset:any[]; alaotsikko: string; }) => {
      temp.push(<Text>{taso.alaotsikko}</Text>)
      taso.kysymykset.map((kysymys: string ) => {
      temp.push(<Text>{kysymys}</Text>)
      })
      answers.map((vastaus: number[]) => {
      temp.push(<Text>{vastaus}</Text>)
      })
    }))
    return temp;
    })
  
  }

    
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              {QuesAnsw(data, answers, sivu)}
              <Text>{yname}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;