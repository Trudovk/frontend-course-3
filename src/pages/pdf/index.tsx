import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
  Font,
} from "@react-pdf/renderer";
import { FC } from "react";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "сolumn",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  myText: {
    fontFamily: "Roboto",
  },
});

interface IMyForm {
  name: string;
  picture: FileList;
}

const MyDocument: FC<IMyForm> = ({ name, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.myText}>{name}</Text>
        </View>

        <View style={styles.section}>
          {picture && <Image source={picture[0]} />}
        </View>
      </Page>
    </Document>
  );
};

const Pdf = () => {
  const [task, setTask] = useState<IMyForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement = (data: IMyForm) => {
    setTask(data);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <input
          type="file"
          accept="image/jpg, image/png"
          {...register("picture", {
            required: "Required",
          })}
        />

        <div>{errors.name?.message}</div>
        <button type="submit">Сохранить</button>
      </form>

      {!!task?.name && (
        <PDFDownloadLink
          document={<MyDocument name={task.name} picture={task.picture} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : error?.message ?? "Download now!"
          }
        </PDFDownloadLink>
      )}
    </>
  );
};

export default Pdf;
