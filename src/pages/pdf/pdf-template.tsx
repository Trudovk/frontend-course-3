import {
  Document,
  View,
  Image,
  Text,
  StyleSheet,
  Page,
} from "@react-pdf/renderer";
import { FC } from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

interface IPdfData {
  name: string;
  picture: string;
}

const MyDocument: FC<IPdfData> = ({ name, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>

        <View style={styles.section}>{picture && <Image src={picture} />}</View>
      </Page>
    </Document>
  );
};

export default MyDocument;
